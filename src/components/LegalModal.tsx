import { X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  type: 'terms' | 'privacy';
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  const isTerms = type === 'terms';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] backdrop-blur-2xl bg-white/95 rounded-3xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl sm:text-3xl text-gray-900"
            >
              {isTerms ? 'Terms of Service' : 'Privacy Policy'}
            </motion.h2>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="hover:bg-white/50 rounded-xl text-gray-900"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6 text-gray-700"
            >
              {isTerms ? <TermsContent /> : <PrivacyContent />}
            </motion.div>
          </div>

          {/* Footer */}
          <div className="p-6 sm:p-8 border-t border-gray-200 bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                I Understand
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TermsContent() {
  return (
    <>
      <div>
        <p className="text-gray-500 mb-4">Last Updated: October 29, 2025</p>
        <p className="leading-relaxed">
          Welcome to Solaeraab Private Limited. By accessing or using our AI-powered products and services (Oryga, Learnova, Eirya, and Marketing Services), you agree to be bound by these Terms of Service.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">1. Acceptance of Terms</h3>
        <p className="leading-relaxed">
          By accessing and using any Solaeraab products, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use our services.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">2. Use License</h3>
        <p className="leading-relaxed mb-3">
          Permission is granted to temporarily access and use Solaeraab products for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or public display</li>
          <li>Attempt to decompile or reverse engineer any software including AI models</li>
          <li>Remove any copyright or proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">3. AI Technology Disclaimer</h3>
        <p className="leading-relaxed">
          Our products utilize advanced artificial intelligence and machine learning technologies. While we strive for accuracy, AI-generated insights and recommendations should be used as supportive tools and not as definitive solutions. Users should exercise their own judgment and consult professionals when necessary.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">4. User Accounts</h3>
        <p className="leading-relaxed">
          When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding your password and for all activities that occur under your account.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">5. Healthcare Disclaimer (Oryga)</h3>
        <p className="leading-relaxed">
          Oryga is an AI-powered healthcare management tool and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">6. Mental Health Disclaimer (Eirya)</h3>
        <p className="leading-relaxed">
          Eirya is designed to support mental wellness using AI technology but is not a replacement for professional mental health services. If you are experiencing a mental health crisis, please contact emergency services or a mental health professional immediately.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">7. Intellectual Property</h3>
        <p className="leading-relaxed">
          The products and services, including but not limited to software, AI models, algorithms, text, images, graphics, logos, and other content, are owned by Solaeraab Private Limited and are protected by copyright, trademark, patent, and other intellectual property laws.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">8. Limitation of Liability</h3>
        <p className="leading-relaxed">
          Solaeraab Private Limited shall not be liable for any damages arising out of the use or inability to use our products, including AI-generated content or recommendations, even if we have been notified of the possibility of such damages. Some jurisdictions do not allow limitations on implied warranties or exclusions of liability, so these limitations may not apply to you.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">9. Modifications to Service</h3>
        <p className="leading-relaxed">
          We reserve the right to modify or discontinue our services, including AI features and capabilities, at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">10. Governing Law</h3>
        <p className="leading-relaxed">
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Solaeraab Private Limited operates, without regard to its conflict of law provisions.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">11. Contact Information</h3>
        <p className="leading-relaxed">
          If you have any questions about these Terms of Service, please contact us at legal@solaeraab.com.
        </p>
      </div>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <div>
        <p className="text-gray-500 mb-4">Last Updated: October 29, 2025</p>
        <p className="leading-relaxed">
          At Solaeraab Private Limited, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered products and services.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">1. Information We Collect</h3>
        <p className="leading-relaxed mb-3">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Account credentials</li>
          <li>Health information (for Oryga users, with consent)</li>
          <li>Mental wellness data (for Eirya users, with consent)</li>
          <li>Educational data (for Learnova users)</li>
          <li>AI interaction data and usage patterns</li>
          <li>Communication preferences</li>
          <li>Payment information (processed securely through third-party providers)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">2. How We Use AI and Your Data</h3>
        <p className="leading-relaxed mb-3">Our AI systems process your data to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide personalized recommendations and insights</li>
          <li>Improve AI model accuracy and performance</li>
          <li>Generate predictive analytics</li>
          <li>Enhance user experience through machine learning</li>
          <li>Detect patterns and trends in your usage</li>
        </ul>
        <p className="leading-relaxed mt-3">
          All AI processing is done with strict privacy controls and your data is never used to train models that benefit other users without explicit consent.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">3. How We Use Your Information</h3>
        <p className="leading-relaxed mb-3">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide, maintain, and improve our AI-powered services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, and support messages</li>
          <li>Respond to your comments, questions, and customer service requests</li>
          <li>Analyze usage patterns and trends</li>
          <li>Detect, prevent, and address technical issues and security threats</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">4. Data Security</h3>
        <p className="leading-relaxed">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include end-to-end encryption, secure AI processing environments, regular security assessments, and strict access controls. However, no method of transmission over the Internet is 100% secure.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">5. Health Information Privacy (HIPAA Compliance)</h3>
        <p className="leading-relaxed">
          For Oryga users, we comply with applicable healthcare privacy regulations, including HIPAA where applicable. Health information is treated with the highest level of confidentiality, processed by HIPAA-compliant AI systems, and is only accessed by authorized personnel for legitimate purposes.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">6. Mental Health Data</h3>
        <p className="leading-relaxed">
          Eirya collects sensitive mental health information for AI analysis. This data is encrypted both in transit and at rest, processed in secure AI environments, stored securely, and never shared with third parties without your explicit consent. You have the right to access, modify, or delete your mental health data at any time.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">7. AI Model Training and Your Data</h3>
        <p className="leading-relaxed">
          We may use aggregated, anonymized data to improve our AI models. Personal identifiable information is never used in model training without explicit consent. You have the right to opt-out of having your data used for AI model improvement at any time through your account settings.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">8. Data Sharing and Disclosure</h3>
        <p className="leading-relaxed mb-3">We do not sell your personal information or AI-generated insights. We may share your information only in the following circumstances:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>With your explicit consent</li>
          <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights, privacy, safety, or property</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">9. Your Rights</h3>
        <p className="leading-relaxed mb-3">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access your personal information and AI-generated insights</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to or restrict processing of your information</li>
          <li>Data portability (export your data)</li>
          <li>Opt-out of AI-driven features</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">10. Cookies and Tracking Technologies</h3>
        <p className="leading-relaxed">
          We use cookies and similar tracking technologies to track activity on our services and hold certain information. These may be used to improve AI personalization. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">11. Children's Privacy</h3>
        <p className="leading-relaxed">
          Our services are not intended for children under 13 years of age (or 16 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">12. International Data Transfers</h3>
        <p className="leading-relaxed">
          Your information may be transferred to and maintained on servers located outside of your jurisdiction. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">13. Changes to Privacy Policy</h3>
        <p className="leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </div>

      <div>
        <h3 className="text-xl mb-3 text-gray-900">14. Contact Us</h3>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, our AI practices, or our data handling, please contact us at:
        </p>
        <p className="leading-relaxed mt-3">
          Email: privacy@solaeraab.com<br />
          Address: Solaeraab Private Limited, [Company Address]<br />
          Data Protection Officer: dpo@solaeraab.com<br />
          AI Ethics Officer: ai-ethics@solaeraab.com
        </p>
      </div>
    </>
  );
}
