import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
        <Image src="/images/profile.jpg" alt="Janet Aborvor" width={192} height={192} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I'm <span className="text-pink-500">Janet Aborvor</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
        A Software Engineer passionate about 
        <span className="text-pink-400 font-semibold"> Web Development</span>, 
        <span className="text-pink-400 font-semibold"> Cybersecurity</span>, and 
        <span className="text-pink-400 font-semibold"> Android Development</span>.  
        I love solving complex problems and building secure, user-friendly applications.
      </p>

      {/* CTA Button */}
      <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-md text-lg font-medium 
        hover:bg-pink-600 transition duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;