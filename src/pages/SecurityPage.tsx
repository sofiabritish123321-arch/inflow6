import React from 'react';
import { Shield, Lock, Server, Eye, CheckCircle2 } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Encryption',
      description: 'All data is encrypted in transit (SSL/TLS) and at rest using industry-standard protocols.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Access Controls',
      description: 'Strict role-based permissions ensure only authorized team members can access sensitive systems.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backups',
      description: 'Your data is backed up regularly to ensure reliability and protection against data loss.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Monitoring',
      description: 'Continuous monitoring helps detect and respond to potential threats in real-time.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Best Practices',
      description: 'Our infrastructure is powered by trusted providers and adheres to industry compliance standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We take security seriously and follow industry best practices to keep your data safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
            >
              <div className="text-primary-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Business is Protected</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Your business information and customer data are always protected within Inflow. 
              We maintain the highest standards of security and compliance to ensure your peace 
              of mind while you focus on growing your business.
            </p>
          </div>
        </div>

        {/* Additional Security Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h3>
            <p className="text-gray-600 leading-relaxed">
              All customer data is encrypted using AES-256 encryption and stored in secure, 
              geographically distributed data centers with 24/7 monitoring and support.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              We adhere to industry-standard compliance frameworks and regularly undergo 
              security audits to ensure we meet the highest standards of data protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}