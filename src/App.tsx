import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { AIFeatures } from './components/AIFeatures';
import { FloatingParticles } from './components/FloatingParticles';

export default function App() {
  const [legalContent, setLegalContent] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-blue-50 to-blue-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AIFeatures />
        <Products />
        <ServicesSection />
        <AboutSection />
        <CTASection />
        <Footer onOpenLegal={setLegalContent} />
      </div>

      {/* Legal Modal */}
      {legalContent && (
        <LegalModal 
          type={legalContent} 
          onClose={() => setLegalContent(null)} 
        />
      )}
    </div>
  );
}
