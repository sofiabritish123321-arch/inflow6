import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won\'t be charged again. There are no cancellation fees or penalties.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security measures including SSL encryption, regular backups, and strict access controls to protect your business data. All data is encrypted both in transit and at rest, and we maintain compliance with industry security standards.'
    },
    {
      question: 'How easy is it to get started?',
      answer: 'Very easy! Our onboarding process takes just minutes, and our intuitive interface means you can start managing clients right away. We provide setup guides, video tutorials, and our support team is here to help you get the most out of Inflow.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards including Visa, MasterCard, American Express, and Discover. Payments are processed securely through Stripe, and you can update your payment method at any time through your account settings.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 7-day free trial for both our Standard and Premium plans. No credit card is required to start your trial, and you can upgrade or downgrade at any time during or after the trial period.'
    },
    {
      question: 'Can I import my existing data?',
      answer: 'Absolutely. We provide easy import tools that work with CSV files and can connect to popular CRM and business management platforms. Our support team can also assist with data migration to ensure a smooth transition.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including email support for all users, priority support for Premium customers, detailed documentation, video tutorials, and a knowledge base. Most support requests are answered within 24 hours.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing period. We\'ll prorate any charges appropriately.'
    },
    {
      question: 'Is there a limit to the number of clients I can manage?',
      answer: 'No, both our Standard and Premium plans include unlimited client records. You can manage as many clients as your business needs without any additional per-client charges.'
    },
    {
      question: 'Do you offer integrations with other tools?',
      answer: 'Yes! We integrate with popular tools including Google Calendar, Outlook, Zapier, and many others. Our Premium plan also includes API access for custom integrations with your existing business tools.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Find answers to common questions about Inflow. Can't find what you're looking for? Feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                  <div className="text-primary-600 flex-shrink-0">
                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help. Get in touch and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:info@inflow.com"
                className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}