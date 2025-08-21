import React from 'react';

const LandingHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xs">💇‍♀️</span>
            </div>
            <span className="font-semibold">HeadZ - AI Hair Styling</span>
          </div>
          <div className="text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              ✨ Try our new AI-powered wig styler!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
