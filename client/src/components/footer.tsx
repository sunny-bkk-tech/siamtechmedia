export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Siam Tech Media Co., Ltd.
            </h3>
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              Empowering businesses with smart technology solutions tailored for success.
            </p>
            <p className="text-sm text-white/60 font-medium">siamtechmedia.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Custom App Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">E-commerce Solutions</li>
              <li className="hover:text-white transition-colors cursor-pointer">AI & Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Government IT</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white transition-colors">Bangkok, Thailand</li>
              <li className="hover:text-white transition-colors">+66 94 887 7955</li>
              <li className="hover:text-white transition-colors">siamtechmedia@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2025 Siam Tech Media Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
