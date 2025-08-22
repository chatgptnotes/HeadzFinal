'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/common_components/navbar/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTryNow = () => {
    router.push('/wig-styler');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to learn more about HeadZ and try on some hairstyles!");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/headz', color: 'from-pink-500 to-purple-500' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/headz', color: 'from-blue-500 to-blue-600' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/headz', color: 'from-red-500 to-red-600' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/headz', color: 'from-blue-400 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Have questions? Want to learn more? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 relative overflow-hidden shadow-lg">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gray-50/50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/30 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                        >
                          <option value="" className="text-gray-700">Select a subject</option>
                          <option value="general" className="text-gray-700">General Inquiry</option>
                          <option value="support" className="text-gray-700">Technical Support</option>
                          <option value="feedback" className="text-gray-700">Feedback</option>
                          <option value="partnership" className="text-gray-700">Partnership</option>
                          <option value="other" className="text-gray-700">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900 placeholder-gray-500 resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600">hello@headz.ai</p>
                        <p className="text-gray-600">support@headz.ai</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                        <p className="text-gray-600">www.headz.ai</p>
                        <p className="text-gray-600">Follow us on social media</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                        <p className="text-gray-600">We typically respond within 24 hours</p>
                        <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Chat</h3>
                  <p className="text-gray-600 mb-4">
                    Prefer instant messaging? Chat with us on WhatsApp!
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center"
                  >
                    <span className="text-2xl mr-2">💬</span>
                    Chat on WhatsApp
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does HeadZ work?</h3>
              <p className="text-gray-600">
                HeadZ uses advanced AI technology to apply virtual hairstyles to your photos. Simply upload your photo, 
                choose a hairstyle, and see the result instantly!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes! We take privacy seriously. All uploaded images are automatically deleted after 24 hours, 
                and we never store or share your personal data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What image formats are supported?</h3>
              <p className="text-gray-600">
                We support JPEG, PNG, WebP, and HEIC formats. For best results, use high-resolution images 
                with clear facial features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does processing take?</h3>
              <p className="text-gray-600">
                Most images are processed in under 30 seconds. Processing time may vary based on image size 
                and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
