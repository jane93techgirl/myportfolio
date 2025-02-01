import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-pink-500">Janet Aborvor</h1>
        <h2 className="text-xl text-gray-300 mt-2">
          Web & Android Developer | Cybersecurity Enthusiast
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          I am a passionate Software Engineer with a strong interest in website development, cybersecurity, 
          and Android development. I specialize in building modern and responsive web applications using Next.js 
          and enjoy exploring secure coding practices. I love solving technical challenges and continuously improving my skills.
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-pink-400">Skills</h3>
          <p className="text-gray-300 mt-2">
            Next.js, React, JavaScript, Android Development, Cybersecurity, Python, Tailwind CSS
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-pink-400">Contact</h3>
          <p className="text-gray-300 mt-2">abenarhdavidson@gmail.com</p>
          <p className="text-gray-300">0592030793</p>
        </div>
      </div>
    </section>
  );
};

export default About;