import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-500 hover:text-pink-400 transition-colors">
          
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-pink-400 transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-pink-400 transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">
            Contact
          </Link>
        </div>
        <button className="md:hidden text-gray-300 hover:text-pink-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
