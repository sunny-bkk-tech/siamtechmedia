import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Map } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState<InsertContactSubmission>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    occupation: "",
    choice: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for your message! We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        occupation: "",
        choice: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    field: keyof InsertContactSubmission,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="page-transition active">
      <HeroSection
        title="Contact Us"
        subtitle="Ready to transform your business with smart technology?"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">siamtechmedia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+66 94 887 7955</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* <div className="mt-8">
                <h3 className="font-semibold mb-4">Our Office</h3>
                <Card className="bg-gray-50">
                  <CardContent className="h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Map className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-medium">Google Maps Integration</p>
                      <p className="text-sm">Bangkok, Thailand</p>
                    </div>
                  </CardContent>
                </Card>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="modern-card p-8 bg-white">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                Send us a Message
              </h2>
              {/* <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2 input-modern h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    required
                    className="mt-2 input-modern h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="occupation" className="text-sm font-semibold text-foreground">Occupation</Label>
                  <Input
                    id="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange("occupation", e.target.value)}
                    className="mt-2 input-modern h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="choice" className="text-sm font-semibold text-foreground">Interested In *</Label>
                  <Select
                    value={formData.choice}
                    onValueChange={(value) => handleInputChange("choice", value)}
                  >
                    <SelectTrigger className="mt-2 input-modern h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="app-development">Custom App Development</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                      <SelectItem value="ai-automation">AI & Automation</SelectItem>
                      <SelectItem value="government-it">Government & Enterprise IT</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="mt-2 input-modern resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-button text-white font-semibold h-12 text-lg rounded-xl border-0" 
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>

              </form> */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-foreground"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-foreground"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phoneNumber"
                      className="text-sm font-semibold text-foreground"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      required
                      className="mt-2 input-modern h-12"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="occupation"
                      className="text-sm font-semibold text-foreground"
                    >
                      Occupation
                    </Label>
                    <Input
                      id="occupation"
                      type="text"
                      value={formData.occupation}
                      onChange={(e) =>
                        handleInputChange("occupation", e.target.value)
                      }
                      className="mt-2 input-modern h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="choice"
                      className="text-sm font-semibold text-foreground"
                    >
                      Interested In *
                    </Label>
                    <Select
                      value={formData.choice}
                      onValueChange={(value) =>
                        handleInputChange("choice", value)
                      }
                    >
                      <SelectTrigger className="mt-2 input-modern h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app-development">
                          Custom App Development
                        </SelectItem>
                        <SelectItem value="ecommerce">
                          E-commerce Solutions
                        </SelectItem>
                        <SelectItem value="ai-automation">
                          AI & Automation
                        </SelectItem>
                        <SelectItem value="government-it">
                          Government & Enterprise IT
                        </SelectItem>
                        <SelectItem value="consultation">
                          Free Consultation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                    rows={5}
                    className="mt-2 input-modern resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-button text-white font-semibold h-12 text-lg rounded-xl border-0"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
