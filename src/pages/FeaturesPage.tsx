import React from 'react';
import { Users, Zap, Calendar, BarChart3 } from 'lucide-react';

interface FeaturesPageProps {
  onNavigate?: (page: string) => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Everything you need to manage clients, automate workflows, and grow your business efficiently.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300 mt-1">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* Features Comparison Table */}
        <section className="bg-white py-12 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Features Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 border-b">Features</th>
                    <th className="text-left px-6 py-3 border-b">Replaces</th>
                    <th className="text-left px-6 py-3 border-b">Other Tools</th>
                    <th className="text-left px-6 py-3 border-b">Inflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-3">CRM & Pipeline Management</td>
                    <td className="px-6 py-3"><img src="/icons/hubspot.svg" className="h-6 inline-block" alt="HubSpot" /></td>
                    <td className="px-6 py-3">$99/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Unlimited Sales Funnels</td>
                    <td className="px-6 py-3"><img src="/icons/clickfunnels.svg" className="h-6 inline-block" alt="ClickFunnels" /></td>
                    <td className="px-6 py-3">$297/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Website Builder</td>
                    <td className="px-6 py-3">
                      <img src="/icons/wix.svg" className="h-6 inline-block mr-2" alt="Wix" />
                      <img src="/icons/wordpress.svg" className="h-6 inline-block" alt="WordPress" />
                    </td>
                    <td className="px-6 py-3">$29/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Surveys & Forms</td>
                    <td className="px-6 py-3"><img src="/icons/surveymonkey.svg" className="h-6 inline-block" alt="SurveyMonkey" /></td>
                    <td className="px-6 py-3">$49/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Email Marketing</td>
                    <td className="px-6 py-3">
                      <img src="/icons/mailchimp.svg" className="h-6 inline-block mr-2" alt="Mailchimp" />
                      <img src="/icons/activecampaign.svg" className="h-6 inline-block" alt="ActiveCampaign" />
                    </td>
                    <td className="px-6 py-3">$99/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">2-Way SMS Marketing</td>
                    <td className="px-6 py-3"><img src="/icons/twilio.svg" className="h-6 inline-block" alt="Twilio" /></td>
                    <td className="px-6 py-3">$99/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Booking & Appointments</td>
                    <td className="px-6 py-3"><img src="/icons/calendly.svg" className="h-6 inline-block" alt="Calendly" /></td>
                    <td className="px-6 py-3">$29/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Workflow Automations</td>
                    <td className="px-6 py-3"><img src="/icons/zapier.svg" className="h-6 inline-block" alt="Zapier" /></td>
                    <td className="px-6 py-3">$169/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Courses/Products</td>
                    <td className="px-6 py-3"><img src="/icons/teachable.svg" className="h-6 inline-block" alt="Teachable" /></td>
                    <td className="px-6 py-3">$99/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Call Tracking</td>
                    <td className="px-6 py-3"><img src="/icons/callrail.svg" className="h-6 inline-block" alt="CallRail" /></td>
                    <td className="px-6 py-3">$49/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Reputation Management</td>
                    <td className="px-6 py-3"><img src="/icons/birdeye.svg" className="h-6 inline-block" alt="BirdEye" /></td>
                    <td className="px-6 py-3">$159/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Tracking & Analytics</td>
                    <td className="px-6 py-3"><img src="/icons/googleanalytics.svg" className="h-6 inline-block" alt="Google Analytics" /></td>
                    <td className="px-6 py-3">$299/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Communities</td>
                    <td className="px-6 py-3"><img src="/icons/skool.svg" className="h-6 inline-block" alt="Skool" /></td>
                    <td className="px-6 py-3">$89/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Document Signing</td>
                    <td className="px-6 py-3"><img src="/icons/docusign.svg" className="h-6 inline-block" alt="DocuSign" /></td>
                    <td className="px-6 py-3">$47/MONTHLY</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Gray-Labeled Mobile App</td>
                    <td className="px-6 py-3">Unique to Inflow</td>
                    <td className="px-6 py-3">—</td>
                    <td className="px-6 py-3 text-green-500 font-bold">✔</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <p className="text-xl font-bold">Overall Price: <span className="line-through text-red-500">$1,612 per month</span> → <span className="text-green-600">$75 per month</span></p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              See how these powerful features can streamline your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate?.('pricing')}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </button>
              <button 
                onClick={() => onNavigate?.('contact')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-gray-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}