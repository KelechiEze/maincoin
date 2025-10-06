import React from 'react';
import { Users, Zap, ArrowRight } from 'lucide-react';
import "./LoanServiceComponent.css"

const LoanServiceComponent = () => {
  return (
    <div id="why" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Section */}
          <div className="relative">
            {/* Experience Badge */}
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg z-10">
              <div className="text-2xl font-bold">26</div>
              <div className="text-sm">years of working experience</div>
            </div>
            
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/chooseenew.jpg"
                alt="Secure crypto server"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="space-y-8">
            
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-8 h-0.5 bg-blue-600"></div>
                <span className="text-sm font-semibold">Our Benefits</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Us?
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                Provide your best loan services and our experience staff help you. Less document and fast approve process of passages. Also we are providing credit card facility to per day interest credit card lorem Ipsum available, but the majority have suffered.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Team</h3>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit is amet, consectetur notted.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Payments</h3>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit is amet, consectetur notted.</p>
                </div>
              </div>
            </div>

            {/* Progress Bars Section */}
            <div className="space-y-6">
              {/* Loan Process */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Loan Process</span>
                  <span className="text-blue-600 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>

              {/* Consultancy */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Consultancy</span>
                  <span className="text-blue-600 font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>

              {/* Payment Benefits */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Payment Benefits</span>
                  <span className="text-blue-600 font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanServiceComponent;