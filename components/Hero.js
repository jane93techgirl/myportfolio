'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const techStack = [
    'React/Next.js', 
    'Node.js', 
    'Python', 
    'Java/Kotlin',
    'AWS', 
    'Docker', 
    'OWASP Top 10', 
    'Pen Testing'
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 md:flex-row md:items-center md:justify-between md:px-12">
      
      {/* Text + Tech Stack Section */}
      <div className="max-w-2xl z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-pink-500">Janet Aborvor</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8">
          A <span className="text-pink-400 font-semibold">Software Engineer</span> passionate about&nbsp;
          <span className="text-pink-400 font-semibold">Web Development</span>,&nbsp;
          <span className="text-pink-400 font-semibold">Cybersecurity</span>, and&nbsp;
          <span className="text-pink-400 font-semibold">Android Development</span>.  
          I love solving complex problems and building secure, user-friendly applications.
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-3">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-gray-700 hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-8 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500/10 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-lg">
          <Image 
            src="/images/profile.jpg" 
            alt="Janet Aborvor smiling in front of a blurred background" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
