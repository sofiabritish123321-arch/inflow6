import React from 'react';

export default function TermsPage() {
  const sections = [
    {
      title: 'Eligibility',
      content: 'You must be at least 18 years old to create an account.'
    },
    {
      title: 'Accounts & Responsibilities',
      items: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree not to share your login or misuse the platform.'
      ]
    },
    {
      title: 'Acceptable Use',
      content: 'You may not use Inflow to:',
      items: [
        'Send spam or abusive content.',
        'Violate any applicable laws.',
        'Interfere with or attempt to disrupt platform operations.'
      ]
    },
    {
      title: 'Subscriptions & Payments',
      items: [
        'Inflow is a subscription-based service billed on a recurring basis.',
        'Payments are non-refundable, unless required by law.',
        'You may cancel at any time, and your subscription will remain active until the end of the billing period.'
      ]
    },
    {
      title: 'Service Availability',
      content: 'We strive to keep Inflow available at all times. However, occasional downtime may occur for updates, maintenance, or unexpected issues.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Inflow is provided "as is." We are not responsible for indirect damages such as lost profits, lost data, or business interruptions.'
    },
    {
      title: 'Updates to Terms',
      content: 'We may update these Terms from time to time. Continued use of Inflow means you accept the changes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Welcome to Inflow! By signing up or using our platform, you agree to these terms:
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              
              {section.content && (
                <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
              )}
              
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}