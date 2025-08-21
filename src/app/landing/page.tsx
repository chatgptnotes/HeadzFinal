'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { WigStyler } from '@/components/wig-styler';
import Navbar from '@/components/common_components/navbar/Navbar';

const LandingPage = () => {
  const { login } = useAuth();

  const handleTryNow = () => {
    login();
  };

  // Simple wig gallery data
  const wigData = [
    {
      name: 'Short Pixie',
      description: 'Modern & Edgy',
      image: '/wig-images/shortpix.png'
    },
    {
      name: 'Curly Afro',
      description: 'Natural & Bold',
      image: '/wig-images/curlyafro.jpg'
    },
    {
      name: 'Modern Mullet',
      description: 'Trendy & Retro',
      image: '/wig-images/modernmullet.png'
    },
    {
      name: 'Textured Quiff',
      description: 'Classic & Sophisticated',
      image: '/wig-images/Textured.png'
    },
    {
      name: 'Pompadour',
      description: 'Elegant & Timeless',
      image: '/wig-images/pompdour.png'
    },
    {
      name: 'Classic Pompadour',
      description: 'Vintage & Refined',
      image: '/wig-images/clasicpomp.png'
    },
    {
      name: 'Side-Swept Pompadour',
      description: 'Dynamic & Modern',
      image: '/wig-images/sidesweptpompadour.png'
    },
    {
      name: 'Short Side Part',
      description: 'Professional & Clean',
      image: '/wig-images/shortside.png'
    },
    {
      name: 'Curly Top',
      description: 'Playful & Youthful',
      image: '/wig-images/curlytop.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Simple Gallery Section */}
      <section className="pt-16 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Wig Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our stunning collection of hairstyles
          </p>
        </div>
        
        {/* Simple Grid Layout */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wigData.map((wig, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={wig.image} 
                    alt={wig.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {wig.name}
                  </h3>
                  <p className="text-gray-600">
                    {wig.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wig Styler Section */}
      <section id="wig-styler" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Try It Now
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload your photo and start exploring different wig styles instantly
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <WigStyler />
          </div>
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

export default LandingPage;
