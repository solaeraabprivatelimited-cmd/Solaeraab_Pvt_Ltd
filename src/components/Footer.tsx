import { Mail, Linkedin, Twitter, Github, Sparkles, ArrowUp, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:info@solaeraab.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none" />
      
      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur-sm border-0 p-0 shadow-lg text-white"
            size="icon"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl sm:text-2xl text-gray-900">Solaeraab Private Limited</h3>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Innovating the future of healthcare, education, mental wellness, and digital marketing through cutting-edge AI-powered technology solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 border border-gray-200 flex items-center justify-center hover:from-blue-200 hover:to-purple-200 hover:border-blue-300 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="mb-4 text-base sm:text-lg text-gray-900">Products</h4>
            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              {['Oryga', 'Learnova', 'Eirya', 'Marketing Services'].map((product) => (
                <motion.li key={product} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a href="#products" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                    {product}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="mb-4 text-base sm:text-lg text-gray-900">Company</h4>
            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </motion.li>
              <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </motion.li>
              <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <a href="#cta" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-blue-300 transition-all duration-500 group shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg sm:text-xl text-gray-900">Founder & Visionary</h4>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <h5 className="text-xl sm:text-2xl mb-2 text-gray-900">Reshma Shaik</h5>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  The visionary leader behind Solaeraab's innovative AI-powered solutions. Reshma Shaik is dedicated to transforming healthcare, education, mental wellness, and digital marketing through cutting-edge technology, making a meaningful impact on people's lives worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Solaeraab Private Limited. All rights reserved. Powered by AI.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-gray-600">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenLegal('terms')}
              className="hover:text-blue-600 transition-colors"
            >
              Terms
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-blue-600 transition-colors"
            >
              Privacy
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
