'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/common_components/navbar/Navbar';
import { wigs } from '@/app/wigs';

const GalleryPage = () => {
  const { login } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleTryNow = () => {
    login();
  };

  const categories = [
    { id: 'all', name: 'All Styles', icon: '✨' },
    { id: 'short', name: 'Short Hair', icon: '✂️' },
    { id: 'long', name: 'Long Hair', icon: '💇‍♀️' },
    { id: 'curly', name: 'Curly Hair', icon: '🌀' },
    { id: 'classic', name: 'Classic', icon: '👑' },
  ];

  const filteredWigs = selectedCategory === 'all' 
    ? wigs 
    : wigs.filter(wig => {
        if (selectedCategory === 'short') return wig.name.toLowerCase().includes('short') || wig.name.toLowerCase().includes('pixie');
        if (selectedCategory === 'long') return wig.name.toLowerCase().includes('long') || wig.name.toLowerCase().includes('waves');
        if (selectedCategory === 'curly') return wig.name.toLowerCase().includes('curly') || wig.name.toLowerCase().includes('afro');
        if (selectedCategory === 'classic') return wig.name.toLowerCase().includes('classic') || wig.name.toLowerCase().includes('pompadour');
        return true;
      });

  // Simple wig gallery data
  const wigGalleryData = [
    {
      wig_id: 'short-pixie',
      avatar_url: '/wig-images/shortpix.png',
      wig_name: 'Short Pixie',
      wig_title: 'Modern & Edgy',
      style_type: 'Short Hair',
      panel_1_content: 'A bold and modern pixie cut that exudes confidence and style. Perfect for those who want a low-maintenance yet striking look.',
      stats: {
        'Style Type': 'Short Hair',
        'Difficulty': 'Easy',
        'Maintenance': 'Low',
        'Best For': 'Oval & Heart Faces',
        'Occasion': 'Casual & Professional'
      },
      features: {
        styling: [
          'Quick to style',
          'Great volume',
          'Easy maintenance',
          'Versatile look'
        ],
        care: [
          'Wash every 2-3 days',
          'Use volumizing products',
          'Regular trims needed',
          'Protect from heat'
        ]
      }
    },
    {
      wig_id: 'curly-afro',
      avatar_url: '/wig-images/curlyafro.jpg',
      wig_name: 'Curly Afro',
      wig_title: 'Natural & Bold',
      style_type: 'Curly Hair',
      panel_1_content: 'Embrace your natural curls with this stunning afro style. Full of volume and personality, perfect for making a statement.',
      stats: {
        'Style Type': 'Curly Hair',
        'Difficulty': 'Medium',
        'Maintenance': 'Medium',
        'Best For': 'All Face Shapes',
        'Occasion': 'Casual & Creative'
      },
      features: {
        styling: [
          'Natural curl pattern',
          'Maximum volume',
          'Unique texture',
          'Bold statement'
        ],
        care: [
          'Moisturize regularly',
          'Use curl-friendly products',
          'Avoid heat styling',
          'Gentle detangling'
        ]
      }
    },
    {
      wig_id: 'modern-mullet',
      avatar_url: '/wig-images/modernmullet.png',
      wig_name: 'Modern Mullet',
      wig_title: 'Trendy & Retro',
      style_type: 'Short Hair',
      panel_1_content: 'A contemporary take on the classic mullet. Short in front, longer in back, creating a dynamic and edgy silhouette.',
      stats: {
        'Style Type': 'Short Hair',
        'Difficulty': 'Medium',
        'Maintenance': 'Medium',
        'Best For': 'Square & Oval Faces',
        'Occasion': 'Creative & Fashion'
      },
      features: {
        styling: [
          'Edgy silhouette',
          'Versatile styling',
          'Trendy appeal',
          'Unique shape'
        ],
        care: [
          'Regular shaping',
          'Texture products',
          'Heat protection',
          'Style maintenance'
        ]
      }
    },
    {
      wig_id: 'textured-quiff',
      avatar_url: '/wig-images/Textured.png',
      wig_name: 'Textured Quiff',
      wig_title: 'Classic & Sophisticated',
      style_type: 'Classic',
      panel_1_content: 'A sophisticated quiff with added texture for a modern twist. Perfect for those who appreciate classic styling with contemporary flair.',
      stats: {
        'Style Type': 'Classic',
        'Difficulty': 'High',
        'Maintenance': 'High',
        'Best For': 'Oval & Heart Faces',
        'Occasion': 'Professional & Formal'
      },
      features: {
        styling: [
          'Classic elegance',
          'Textured finish',
          'Professional look',
          'Versatile styling'
        ],
        care: [
          'Daily styling required',
          'Quality products needed',
          'Regular maintenance',
          'Heat styling essential'
        ]
      }
    },
    {
      wig_id: 'pompadour',
      avatar_url: '/wig-images/pompdour.png',
      wig_name: 'Pompadour',
      wig_title: 'Elegant & Timeless',
      style_type: 'Classic',
      panel_1_content: 'The iconic pompadour style that never goes out of fashion. High volume on top with shorter sides for a timeless, elegant look.',
      stats: {
        'Style Type': 'Classic',
        'Difficulty': 'High',
        'Maintenance': 'High',
        'Best For': 'Oval & Heart Faces',
        'Occasion': 'Formal & Special Events'
      },
      features: {
        styling: [
          'High volume top',
          'Classic silhouette',
          'Elegant appearance',
          'Timeless appeal'
        ],
        care: [
          'Daily styling',
          'Volume products',
          'Heat protection',
          'Regular trims'
        ]
      }
    },
    {
      wig_id: 'classic-pompadour',
      avatar_url: '/wig-images/clasicpomp.png',
      wig_name: 'Classic Pompadour',
      wig_title: 'Vintage & Refined',
      style_type: 'Classic',
      panel_1_content: 'The original pompadour style that defined an era. Perfect for those who appreciate vintage aesthetics and refined elegance.',
      stats: {
        'Style Type': 'Classic',
        'Difficulty': 'Very High',
        'Maintenance': 'Very High',
        'Best For': 'Oval Faces',
        'Occasion': 'Vintage Events & Photos'
      },
      features: {
        styling: [
          'Vintage aesthetic',
          'Refined elegance',
          'Historical appeal',
          'Sophisticated look'
        ],
        care: [
          'Expert styling needed',
          'Premium products',
          'Daily maintenance',
          'Professional care'
        ]
      }
    },
    {
      wig_id: 'side-swept-pompadour',
      avatar_url: '/wig-images/sidesweptpompadour.png',
      wig_name: 'Side-Swept Pompadour',
      wig_title: 'Dynamic & Modern',
      style_type: 'Classic',
      panel_1_content: 'A modern interpretation of the classic pompadour with a dynamic side-swept element. Perfect for those who want classic appeal with contemporary movement.',
      stats: {
        'Style Type': 'Classic',
        'Difficulty': 'High',
        'Maintenance': 'High',
        'Best For': 'Oval & Heart Faces',
        'Occasion': 'Modern Formal Events'
      },
      features: {
        styling: [
          'Dynamic movement',
          'Modern twist',
          'Versatile styling',
          'Contemporary appeal'
        ],
        care: [
          'Regular styling',
          'Movement products',
          'Heat protection',
          'Style maintenance'
        ]
      }
    },
    {
      wig_id: 'short-side-part',
      avatar_url: '/wig-images/shortside.png',
      wig_name: 'Short Side Part',
      wig_title: 'Professional & Clean',
      style_type: 'Short Hair',
      panel_1_content: 'A clean and professional side part that works perfectly for business settings. Neat, tidy, and always appropriate.',
      stats: {
        'Style Type': 'Short Hair',
        'Difficulty': 'Low',
        'Maintenance': 'Low',
        'Best For': 'All Face Shapes',
        'Occasion': 'Professional & Business'
      },
      features: {
        styling: [
          'Clean lines',
          'Professional look',
          'Easy maintenance',
          'Versatile styling'
        ],
        care: [
          'Regular washing',
          'Basic products',
          'Simple styling',
          'Low maintenance'
        ]
      }
    },
    {
      wig_id: 'curly-top',
      avatar_url: '/wig-images/curlytop.png',
      wig_name: 'Curly Top',
      wig_title: 'Playful & Youthful',
      style_type: 'Curly Hair',
      panel_1_content: 'A playful and youthful style with curly texture on top. Perfect for those who want to add personality and fun to their look.',
      stats: {
        'Style Type': 'Curly Hair',
        'Difficulty': 'Medium',
        'Maintenance': 'Medium',
        'Best For': 'Oval & Round Faces',
        'Occasion': 'Casual & Creative'
      },
      features: {
        styling: [
          'Playful texture',
          'Youthful appeal',
          'Fun personality',
          'Creative styling'
        ],
        care: [
          'Curl maintenance',
          'Moisturizing products',
          'Gentle handling',
          'Regular care'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wig Style Gallery
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our stunning collection of AI-powered wig styles
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-white via-purple-50 to-blue-50 border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200 shadow-sm'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wig Style Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any wig card to see detailed information
            </p>
          </div>
          
          {/* Simple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {wigGalleryData.map((wig, index) => (
              <div 
                key={wig.wig_id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={wig.avatar_url} 
                    alt={wig.wig_name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{wig.wig_name}</h3>
                    <p className="text-sm opacity-90">{wig.wig_title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {wig.style_type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {wig.panel_1_content}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className="font-medium">{wig.stats.Difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Maintenance:</span>
                      <span className="font-medium">{wig.stats.Maintenance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Best For:</span>
                      <span className="font-medium">{wig.stats['Best For']}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try These Styles?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Upload your photo and see how these amazing wig styles look on you with our AI technology
          </p>
          <button
            onClick={handleTryNow}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Styling Now
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

export default GalleryPage;
