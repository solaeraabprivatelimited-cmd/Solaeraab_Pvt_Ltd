import { Target, Lightbulb, Shield, Brain, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To revolutionize essential sectors through cutting-edge AI technology, making healthcare, education, mental wellness, and digital marketing accessible to everyone.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We believe in pushing boundaries with AI and creating solutions that don\'t just solve problems but anticipate future needs.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data security and privacy are paramount. We build our AI products with enterprise-grade security and ethical AI practices from the ground up.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-2xl bg-white/70 border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 mb-8 sm:mb-12 shadow-2xl relative overflow-hidden group hover:border-blue-300 transition-all duration-500"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: '200% 200%' }}
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm mb-4 sm:mb-6 text-sm text-gray-900"
            >
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span>About Us</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900"
            >
              About Solaeraab
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              Solaeraab Private Limited is a forward-thinking technology company dedicated to creating innovative AI-powered solutions that make a meaningful impact on people's lives. We specialize in developing cutting-edge applications across healthcare, education, mental wellness, and digital marketing sectors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              With a team of passionate innovators, AI researchers, and industry experts, we're committed to building products that not only meet today's challenges but shape tomorrow's possibilities through the power of artificial intelligence.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
            >
              {[
                { value: '100+', label: 'AI Models' },
                { value: '24/7', label: 'AI Processing' },
                { value: '99.9%', label: 'Accuracy' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl mb-1 text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-blue-300 transition-all duration-500 shadow-xl relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
