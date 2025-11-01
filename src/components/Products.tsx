import { Heart, Users, Hospital, Sparkles, Brain, TrendingUp, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const products = [
  {
    name: 'Oryga',
    tagline: 'Hospital & Patient Management',
    description: 'AI-powered healthcare management system with predictive analytics, automated workflows, and intelligent patient care coordination.',
    icon: Hospital,
    features: [
      { name: 'AI Patient Records', icon: Brain },
      { name: 'Smart Scheduling', icon: TrendingUp },
      { name: 'Predictive Analytics', icon: Sparkles },
      { name: 'Secure Management', icon: Shield },
    ],
    gradient: 'from-blue-500/10 via-blue-50/5 to-blue-50/5',
    aiFeatures: ['Predictive diagnostics', 'Automated patient triage', 'Smart resource allocation'],
  },
  {
    name: 'Learnova',
    tagline: 'Virtual Study Rooms',
    description: 'Revolutionary AI-enhanced virtual learning platform with intelligent study recommendations, adaptive learning paths, and real-time collaboration.',
    icon: Users,
    features: [
      { name: 'AI Study Rooms', icon: Brain },
      { name: 'Smart Collaboration', icon: Users },
      { name: 'Adaptive Learning', icon: TrendingUp },
      { name: 'Progress Tracking', icon: Sparkles },
    ],
    gradient: 'from-blue-500/10 via-blue-50/5 to-blue-50/5',
    aiFeatures: ['Personalized study plans', 'Intelligent content suggestions', 'Performance optimization'],
  },
  {
    name: 'Eirya',
    tagline: 'Mental Health Tracker',
    description: 'Intelligent mental wellness companion powered by AI for mood analysis, personalized insights, and proactive mental health support.',
    icon: Heart,
    features: [
      { name: 'AI Mood Analysis', icon: Brain },
      { name: 'Smart Insights', icon: Sparkles },
      { name: 'Predictive Support', icon: TrendingUp },
      { name: 'Secure & Private', icon: Shield },
    ],
    gradient: 'from-blue-500/10 via-blue-50/5 to-blue-50/5',
    aiFeatures: ['Emotion detection', 'Mental health predictions', 'Personalized recommendations'],
  },
];

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleLearnMore = (productName: string) => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + products.length) % products.length);
  };

  return (
    <section id="products" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm mb-6"
          >
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-900">AI-Enhanced Products</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 px-4 text-gray-900">Our Products</h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Three innovative AI-powered solutions designed to transform healthcare, education, and mental wellness.
          </p>
        </motion.div>

        {/* Mobile Carousel - visible on small screens */}
        <div className="lg:hidden relative mb-8">
          <div className="overflow-hidden relative min-h-[650px] sm:min-h-[700px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <ProductCard product={products[currentIndex]} onLearnMore={handleLearnMore} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </motion.button>
          </div>
        </div>

        {/* Desktop Grid - hidden on small screens */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCard product={product} onLearnMore={handleLearnMore} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 inline-block shadow-lg hover:border-blue-200 transition-all duration-500 group max-w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-600 mb-6 text-lg px-4">
                Interested in our AI-powered solutions?
              </p>
              <Button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get Early Access
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, onLearnMore }: { product: typeof products[0]; onLearnMore: (name: string) => void }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group h-full"
    >
      <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <div className="relative z-10">
          {/* AI Badge */}
          <div className="flex justify-between items-start mb-6">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-blue-50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <product.icon className="w-8 h-8 text-blue-600" />
            </motion.div>
            <Badge className="bg-blue-600 text-white border-0 backdrop-blur-sm shadow-lg">
              <Brain className="w-3 h-3 mr-1" />
              AI
            </Badge>
          </div>

          {/* Product Name */}
          <h3 className="text-3xl mb-2 text-gray-900">{product.name}</h3>
          
          {/* Tagline */}
          <p className="text-gray-500 mb-4 text-sm">{product.tagline}</p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* AI Features highlight */}
          <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2 mb-3 text-sm text-gray-900">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>AI Capabilities</span>
            </div>
            <div className="space-y-2">
              {product.aiFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1 h-1 rounded-full bg-blue-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {product.features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-200 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <feature.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs text-gray-700">{feature.name}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => onLearnMore(product.name)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 backdrop-blur-sm transition-all duration-300 shadow-lg"
          >
            Learn More
            <Sparkles className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
