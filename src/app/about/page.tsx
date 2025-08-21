'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/common_components/navbar/Navbar';

const AboutPage = () => {
  const { login } = useAuth();

  const handleTryNow = () => {
    login();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About HeadZ
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Revolutionizing the way people explore hairstyles with cutting-edge AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At HeadZ, we believe everyone deserves to see themselves with the perfect hairstyle before making a commitment. 
                Our AI-powered platform transforms the way people explore and choose their next look.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The HeadZ Story</h3>
                <p className="text-gray-600 mb-6">
                  Founded in 2024, HeadZ was born from a simple idea: what if you could try on any hairstyle instantly, 
                  without the risk of a bad haircut? Our team of AI researchers, hairstylists, and developers came together 
                  to create the most advanced virtual hair try-on platform.
                </p>
                <p className="text-gray-600 mb-6">
                  Using state-of-the-art machine learning and computer vision technology, we've developed an AI system 
                  that can realistically apply any hairstyle to your photo in seconds. No more salon consultations, 
                  no more guesswork - just instant, accurate results.
                </p>
                <button
                  onClick={handleTryNow}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  Try HeadZ Now
                </button>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">💇‍♀️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by the latest advancements in artificial intelligence and computer vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced AI</h3>
              <p className="text-gray-600">
                Our AI models are trained on millions of hairstyles to provide the most realistic transformations possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600">
                Sophisticated facial recognition and mapping ensure perfect hair placement on any face shape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Get your new look in under 30 seconds with our optimized processing pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate minds behind HeadZ's revolutionary technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Engineers</h3>
              <p className="text-gray-600">Building the future of hairstyle visualization</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-4xl">💇‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hair Experts</h3>
              <p className="text-gray-600">Ensuring realistic and trendy hairstyles</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 via-blue-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">UX Designers</h3>
              <p className="text-gray-600">Creating beautiful, intuitive experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have discovered their perfect style with HeadZ
          </p>
          <button
            onClick={handleTryNow}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg">💇‍♀️</span>
            </div>
            <h3 className="text-2xl font-bold">HeadZ</h3>
          </div>
          <p className="text-gray-300 mb-6">
            AI-powered hairstyle transformation for everyone.
          </p>
          <div className="border-t border-gray-700 pt-8 text-gray-400">
            <p>&copy; 2024 HeadZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
