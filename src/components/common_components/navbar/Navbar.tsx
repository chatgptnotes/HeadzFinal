'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">💇‍♀️</span>
                </div>
                <span className="text-xl font-bold text-white">HeadZ</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">Welcome, {user?.name}</span>
                  <button
                    onClick={logout}
                    className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/30"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={login}
                  className="bg-white text-purple-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-200 focus:outline-none focus:text-purple-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-purple-600 to-blue-600 shadow-lg">
            <Link href="/" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/gallery" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            {isAuthenticated ? (
              <div className="px-3 py-2">
                <span className="text-white text-sm block mb-2">Welcome, {user?.name}</span>
                <button
                  onClick={logout}
                  className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors w-full border border-white/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full mx-3"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
