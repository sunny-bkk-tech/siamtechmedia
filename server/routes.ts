import type { Express, Request, Response } from "express";

import { createServer, type Server } from "http";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";
import "dotenv/config"; // or require('dotenv').config();
import winston from "winston";

// Initialize logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    ...(process.env.NODE_ENV !== "production"
      ? [new winston.transports.Console()]
      : []),
  ],
});
export async function registerRoutes(app: Express): Promise<Server> {
  // Validate email configuration
  if (!process.env.THE_EMAIL || !process.env.THE_PASSWORD) {
    logger.error("Email credentials not configured!");
    throw new Error("Email credentials not configured!");
  }

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD,
    },
  });

  // Verify transporter
  transporter.verify((error: any, success: any) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email transporter is ready");
    }
  });
  app.post(
    "/api/contact",
    [
      body("firstName").notEmpty().trim().withMessage("First name is required"),
      body("lastName").notEmpty().trim().withMessage("Last name is required"),
      body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Valid email is required"),
      body("phoneNumber")
        .notEmpty()
        .trim()
        .withMessage("Phone number is required"),
      body("occupation")
        .notEmpty()
        .trim()
        .withMessage("occupation is required"),
      body("choice").notEmpty().trim().withMessage("Choice is required"),
      body("message").notEmpty().trim().withMessage("Message is required"),
    ],
    async (req: Request, res: Response) => {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        occupation,
        choice,
        message,
      } = req.body;
      const officialEmails = ["info@varaedtech.com"];

      const mail = {
        from: email,
        to: officialEmails.join(","),
        subject: `New Inquiry: ${choice}`,
        bcc: email,
        text: `
      Dear ${firstName} ${lastName},

      Thank you for expressing interest in Siam Tech Media. We have successfully 
      received your inquiry and truly appreciate you reaching out. 
      
      Our team will review your request and get back to you at the earliest opportunity.

      Below are the details you provided:

      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Occupation: ${occupation}
      Topic of Interest: ${choice}
      Message: ${message}

      Should you have any urgent queries in the meantime, please feel free to reply to this email 
      directly, and we’ll do our best to assist you promptly.

      Thank you for choosing Siam Tech Media. We look forward to connecting with you soon!

      Warm regards,
      The Siam Tech Media Team
    `,
      };

      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        await transporter.sendMail(mail);

        res.json({ status: "success", message: "Email sent successfully!" });
      } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({
          status: "error",
          message: "Failed to send email. Please try again later.",
        });
      }
    }
  );
  const httpServer = createServer(app);
  return httpServer;
}
