import { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'motion/react';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', product: '', message: '' });
    }, 3000);
  };

  return (
    <section id="cta" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-l from-pink-200/40 to-purple-200/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-2xl bg-white/70 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden group hover:border-blue-300 transition-all duration-500"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: '200% 200%' }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Interested in our AI-powered solutions? Fill out the form and our team will get back to you shortly.
              </p>
            </motion.div>

            {!submitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="name" className="text-gray-700 text-sm">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/50 border-gray-200 focus:border-blue-400 backdrop-blur-sm hover:bg-white transition-all h-11 sm:h-auto text-gray-900"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-gray-700 text-sm">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/50 border-gray-200 focus:border-blue-400 backdrop-blur-sm hover:bg-white transition-all h-11 sm:h-auto text-gray-900"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="product" className="text-gray-700 text-sm">Interested Product *</Label>
                  <Select
                    required
                    value={formData.product}
                    onValueChange={(value) => setFormData({ ...formData, product: value })}
                  >
                    <SelectTrigger className="bg-white/50 border-gray-200 focus:border-blue-400 backdrop-blur-sm hover:bg-white transition-all h-11 sm:h-auto text-gray-900">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-xl border-gray-200">
                      <SelectItem value="oryga">Oryga - AI Hospital Management</SelectItem>
                      <SelectItem value="learnova">Learnova - AI Virtual Study Rooms</SelectItem>
                      <SelectItem value="eirya">Eirya - AI Mental Health Tracker</SelectItem>
                      <SelectItem value="marketing">Marketing Services - AI Digital Marketing</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="message" className="text-gray-700 text-sm">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/50 border-gray-200 focus:border-blue-400 backdrop-blur-sm min-h-28 sm:min-h-32 hover:bg-white transition-all text-gray-900"
                    placeholder="Tell us more about your interest..."
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 group shadow-lg hover:shadow-xl transition-all duration-300 h-12 sm:h-auto"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-8 sm:py-12"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-sm mb-4 sm:mb-6 shadow-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1,
                    times: [0, 0.5, 1],
                  }}
                >
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-gray-900">Thank You!</h3>
                <p className="text-gray-600 text-base sm:text-lg flex items-center justify-center gap-2">
                  We've received your message and will get back to you soon.
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
