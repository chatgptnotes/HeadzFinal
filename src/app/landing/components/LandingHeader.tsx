import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LandingHeader: React.FC = () => {
  const router = useRouter();
  
  const handleSignIn = () => {
    router.push('/wig-styler');
  };
  
  return (
    <div className="bg-black/90 backdrop-blur-md border-b border-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💇‍♀️</span>
            </div>
            <span className="font-bold text-lg">HeadZ</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
              About
            </Link>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSignIn}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default LandingHeader;
