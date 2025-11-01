import { motion } from 'motion/react';
import { 
  Megaphone, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Sparkles, 
  Users, 
  Globe, 
  Zap,
  Brain,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'AI-powered market analysis and strategic campaign planning tailored to your business goals.',
  },
  {
    icon: Users,
    title: 'Audience Targeting',
    description: 'Intelligent audience segmentation and targeting using advanced machine learning algorithms.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Real-time performance tracking with predictive insights and ROI optimization.',
  },
  {
    icon: Globe,
    title: 'Multi-Channel Marketing',
    description: 'Integrated campaigns across social media, search, email, and display advertising.',
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
    description: 'AI-assisted content generation and optimization for maximum engagement.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and reporting with actionable recommendations for growth.',
  },
];

const features = [
  'AI-Powered Campaign Optimization',
  'Predictive Audience Analytics',
  'Automated Content Scheduling',
  'Real-Time Performance Tracking',
  'Multi-Platform Integration',
  'Custom Reporting Dashboards',
];

export function ServicesSection() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm mb-6"
          >
            <Megaphone className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-900">Marketing Services</span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 text-gray-900 tracking-tight">
            AI-Driven Digital
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your digital presence with our comprehensive AI-powered marketing solutions. 
            Data-driven strategies that deliver measurable results.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToCTA}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToCTA}
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8"
            >
              Request a Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-white border border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Powered by AI</h2>
                <p className="text-gray-600 text-lg">
                  Our marketing platform leverages cutting-edge artificial intelligence to drive better results
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', description: 'Understand your goals and target audience' },
              { step: '02', title: 'Strategy', description: 'AI-powered planning and campaign design' },
              { step: '03', title: 'Execution', description: 'Launch and manage campaigns across channels' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement with AI insights' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-3" />
                )}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {item.step}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl mb-4 text-white">Ready to Transform Your Marketing?</h2>
              <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
                Join leading brands using AI-powered marketing to achieve exceptional results
              </p>
              <Button
                onClick={scrollToCTA}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
