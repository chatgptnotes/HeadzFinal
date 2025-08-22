'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/common_components/navbar/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTryNow = () => {
    router.push('/wig-styler');
  };

  const stats = [
    { number: '50K+', label: 'Happy Users', icon: '😊' },
    { number: '100+', label: 'Hairstyles', icon: '💇‍♀️' },
    { number: '30s', label: 'Processing Time', icon: '⚡' },
    { number: '99%', label: 'Accuracy Rate', icon: '🎯' }
  ];

  const features = [
    {
      icon: '🤖',
      title: 'Advanced AI Technology',
      description: 'State-of-the-art machine learning algorithms trained on millions of hairstyles',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Sophisticated facial recognition for perfect hair placement',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get results in under 30 seconds with optimized processing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your photos are automatically deleted after 24 hours',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      avatar: '👩‍🔬',
      description: 'PhD in Computer Vision, 10+ years in AI research'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      avatar: '👨‍💻',
      description: 'Former Google engineer, specializes in scalable systems'
    },
    {
      name: 'Emma Thompson',
      role: 'Creative Director',
      avatar: '👩‍🎨',
      description: 'Award-winning designer with expertise in user experience'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'HeadZ Launch',
      description: 'Revolutionary AI-powered hair try-on platform goes live'
    },
    {
      year: '2023',
      title: 'AI Development',
      description: 'Advanced machine learning models trained on diverse hairstyles'
    },
    {
      year: '2022',
      title: 'Research Phase',
      description: 'Computer vision breakthrough in facial feature mapping'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Animated Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About HeadZ
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing hairstyle exploration with cutting-edge AI technology. 
              Where innovation meets beauty, and every look becomes possible.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At HeadZ, we believe everyone deserves to see themselves with the perfect hairstyle before making a commitment. 
                Our AI-powered platform transforms the way people explore and choose their next look.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The HeadZ Story</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2024, HeadZ was born from a simple idea: what if you could try on any hairstyle instantly, 
                  without the risk of a bad haircut? Our team of AI researchers, hairstylists, and developers came together 
                  to create the most advanced virtual hair try-on platform.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Using state-of-the-art machine learning and computer vision technology, we've developed an AI system 
                  that can realistically apply any hairstyle to your photo in seconds. No more salon consultations, 
                  no more guesswork - just instant, accurate results.
                </p>
                <button
                  onClick={handleTryNow}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  🚀 Try HeadZ Now
                </button>
              </div>
              <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mx-auto flex items-center justify-center shadow-2xl animate-pulse">
                    <span className="text-9xl">💇‍♀️</span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by the latest advancements in artificial intelligence and computer vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-purple-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-200 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate minds behind HeadZ's revolutionary technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full mx-auto flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                    <span className="text-6xl">{member.avatar}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to revolution - the story of HeadZ
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center mb-12 transition-all duration-700 delay-${index * 300} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-2xl font-bold text-white">{item.year}</span>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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

export default AboutPage;
