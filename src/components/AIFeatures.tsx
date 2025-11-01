import { motion } from 'motion/react';
import { Brain, Shield, Zap, TrendingUp, Sparkles, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Advanced ML algorithms power intelligent predictions and insights',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast AI computations for instant results',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI-driven forecasting and trend analysis',
  },
  {
    icon: Shield,
    title: 'Secure AI',
    description: 'Privacy-first AI with enterprise-grade security',
  },
];

export function AIFeatures() {
  return (
    <section id="ai-features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm mb-4 sm:mb-6 text-sm text-gray-900">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span>AI-Powered Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 px-4 text-gray-900">
            Built on Advanced AI
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Our products leverage cutting-edge artificial intelligence to deliver smarter, faster, and more intuitive experiences.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="h-full backdrop-blur-xl bg-white/70 border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Animated icon container */}
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-5 sm:py-6 inline-flex items-center gap-3 sm:gap-4 shadow-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </motion.div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Powered by</p>
              <p className="text-base sm:text-xl text-gray-900">Next-Generation AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
