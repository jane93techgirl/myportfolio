
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false); // close mobile menu on click

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo/Home */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition-colors">
            
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <Link href={`#${section}`} key={section} legacyBehavior>
              <a className="text-gray-300 hover:text-pink-400 transition-colors capitalize">
                {section}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-pink-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-3 transition-all">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <Link href={`#${section}`} key={section} legacyBehavior>
              <a 
                className="block text-gray-300 hover:text-pink-400 capitalize"
                onClick={handleLinkClick}
              >
                {section}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
