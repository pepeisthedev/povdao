"use client"
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScroll(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black pointer-events-none" />
      
      {/* Main title */}
      <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Proof Of Vision DAO
      </h1>
      
      {/* Rolling text container */}
      <div className="w-full overflow-hidden my-8 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent">
        <div 
          className="whitespace-nowrap text-2xl md:text-3xl font-medium py-4"
          style={{
            transform: `translateX(-${scroll}%)`,
            transition: 'transform 0.05s linear'
          }}
        >
          <span className="inline-block px-4">
            Powering Bitcoin's next chapter • 
          </span>
          <span className="inline-block px-4">
            Powering Bitcoin's next chapter • 
          </span>
          <span className="inline-block px-4">
            Powering Bitcoin's next chapter • 
          </span>
        </div>
      </div>

      {/* Additional content can be added here */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-8">
        <p className="text-gray-400 text-lg mb-8">
          Additional project information and content can be placed here. The section can be expanded with more details about the DAO's vision and goals.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;