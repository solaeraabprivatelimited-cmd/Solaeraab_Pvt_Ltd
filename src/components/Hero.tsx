import { ArrowRight, Sparkles, Cpu, Zap, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-20 relative">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-5 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-200/30 to-blue-100/30 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-5 sm:right-10 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl w-full">
        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <Badge className="px-4 py-2 bg-blue-600 text-white border-0 backdrop-blur-sm text-base gap-2 shadow-lg">
                <Cpu className="w-4 h-4" />
                AI-Powered Solutions
                <Sparkles className="w-4 h-4" />
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mb-6"
            >
              <motion.span
                className="block text-5xl sm:text-7xl lg:text-8xl mb-4 tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Solaeraab
              </motion.span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-500">
                Private Limited
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed px-2"
            >
              Pioneering the future of healthcare, education, and mental wellness through cutting-edge{' '}
              <span className="text-blue-600 inline-flex items-center gap-1">
                <Zap className="w-4 h-4 inline" />
                AI-powered
              </span>{' '}
              technology solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  onClick={scrollToProducts}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 group shadow-xl hover:shadow-2xl transition-all duration-300 h-14 text-base"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  onClick={scrollToCTA}
                  size="lg"
                  variant="outline"
                  className="border-gray-200 bg-white/50 hover:bg-white backdrop-blur-sm w-full sm:w-auto px-8 transition-all duration-300 h-14 text-gray-900 text-base"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-100"
            >
              {[
                { value: '3', label: 'AI Products', icon: Cpu },
                { value: '100%', label: 'Innovation', icon: Sparkles },
                { value: '2025', label: 'Launch', icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-3 group-hover:bg-blue-100 transition-colors">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={scrollToProducts}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
