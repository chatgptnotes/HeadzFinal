'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/common_components/navbar/Navbar';
import { wigs } from '@/app/wigs';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const GalleryPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredWig, setHoveredWig] = useState<string | null>(null);

  const handleTryNow = () => {
    router.push('/wig-styler');
  };

  const categories = [
    { id: 'all', name: 'All Styles', icon: '✨', color: 'from-purple-500 to-blue-500' },
    { id: 'short', name: 'Short Hair', icon: '✂️', color: 'from-pink-500 to-purple-500' },
    { id: 'long', name: 'Long Hair', icon: '💇‍♀️', color: 'from-blue-500 to-cyan-500' },
    { id: 'curly', name: 'Curly Hair', icon: '🌀', color: 'from-orange-500 to-red-500' },
    { id: 'classic', name: 'Classic', icon: '👑', color: 'from-yellow-500 to-orange-500' },
    { id: 'trending', name: 'Trending', icon: '🔥', color: 'from-red-500 to-pink-500' },
  ];

  const filteredWigs = selectedCategory === 'all' 
    ? wigs 
    : wigs.filter(wig => {
        if (selectedCategory === 'short') return wig.name.toLowerCase().includes('short') || wig.name.toLowerCase().includes('pixie');
        if (selectedCategory === 'long') return wig.name.toLowerCase().includes('long') || wig.name.toLowerCase().includes('waves');
        if (selectedCategory === 'curly') return wig.name.toLowerCase().includes('curly') || wig.name.toLowerCase().includes('afro');
        if (selectedCategory === 'classic') return wig.name.toLowerCase().includes('classic') || wig.name.toLowerCase().includes('pompadour');
        if (selectedCategory === 'trending') return wig.name.toLowerCase().includes('modern') || wig.name.toLowerCase().includes('trendy');
        return true;
      });

  // Enhanced wig gallery data with more details
  const wigGalleryData = [
    {
      wig_id: 'short-pixie',
      avatar_url: '/wig-images/shortpix.png',
      wig_name: 'Short Pixie',
      wig_title: 'Modern & Edgy',
      style_type: 'Short Hair',
      difficulty: 'Easy',
      maintenance: 'Low',
      best_for: 'Oval & Heart Faces',
      occasion: 'Casual & Professional',
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
      difficulty: 'Medium',
      maintenance: 'Medium',
      best_for: 'All Face Shapes',
      occasion: 'Casual & Creative',
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
      difficulty: 'Medium',
      maintenance: 'Medium',
      best_for: 'Square & Oval Faces',
      occasion: 'Creative & Fashion',
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
      difficulty: 'High',
      maintenance: 'High',
      best_for: 'Oval & Heart Faces',
      occasion: 'Professional & Formal',
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
      difficulty: 'High',
      maintenance: 'High',
      best_for: 'Oval & Heart Faces',
      occasion: 'Formal & Special Events',
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
      difficulty: 'Very High',
      maintenance: 'Very High',
      best_for: 'Oval Faces',
      occasion: 'Vintage Events & Photos',
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
      difficulty: 'High',
      maintenance: 'High',
      best_for: 'Oval & Heart Faces',
      occasion: 'Modern Formal Events',
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
      difficulty: 'Low',
      maintenance: 'Low',
      best_for: 'All Face Shapes',
      occasion: 'Professional & Business',
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
      difficulty: 'Medium',
      maintenance: 'Medium',
      best_for: 'Oval & Round Faces',
      occasion: 'Casual & Creative',
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'very high': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getMaintenanceColor = (maintenance: string) => {
    switch (maintenance.toLowerCase()) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'very high': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wig Style <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our stunning collection of AI-powered wig styles and find your perfect look
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-purple-500/30 backdrop-blur-sm'
                }`}
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                {category.name}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Style
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any wig card to see detailed information and try it on yourself
            </p>
          </div>
          
          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {wigGalleryData.map((wig) => (
              <div 
                key={wig.wig_id}
                onMouseEnter={() => setHoveredWig(wig.wig_id)}
                onMouseLeave={() => setHoveredWig(null)}
                className="group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-200"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={wig.avatar_url} 
                    alt={wig.wig_name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredWig === wig.wig_id ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Info */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{wig.wig_name}</h3>
                    <p className="text-sm opacity-90">{wig.wig_title}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent flex items-end justify-center transition-all duration-500 ${
                    hoveredWig === wig.wig_id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center text-white p-6">
                      <p className="text-sm mb-4">{wig.panel_1_content}</p>
                      <button
                        onClick={handleTryNow}
                        className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
                      >
                        Try This Style
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                      {wig.style_type}
                    </span>
                    <div className="flex space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getDifficultyColor(wig.difficulty)}`}>
                        {wig.difficulty}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getMaintenanceColor(wig.maintenance)}`}>
                        {wig.maintenance}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Best For:</span>
                      <span className="text-gray-900 font-medium">{wig.best_for}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Occasion:</span>
                      <span className="text-gray-900 font-medium">{wig.occasion}</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-gray-600">Difficulty</div>
                        <div className={`font-bold ${getDifficultyColor(wig.difficulty)}`}>{wig.difficulty}</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-gray-600">Maintenance</div>
                        <div className={`font-bold ${getMaintenanceColor(wig.maintenance)}`}>{wig.maintenance}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
