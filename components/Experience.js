'use client';
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-8 text-center">My Cybersecurity & Development Expertise</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-300">
            I'm a <span className="text-white font-semibold">dynamic Cybersecurity Analyst, Web Developer, and Programmer</span> with a passion for crafting secure, high-performing digital experiences. I specialize in building robust applications while maintaining ironclad security.
          </p>

          <p className="text-gray-300">
            My work spans from <span className="text-white font-semibold">penetration testing and vulnerability assessment</span> to developing modern web applications with security baked into every layer. I don't just write code - I engineer digital fortresses.
          </p>

          <p className="text-gray-300">
            With expertise in <span className="text-white font-semibold">React, Node.js, Python, and Java/Kotlin</span>, I combine cutting-edge development with security best practices to deliver solutions that are both powerful and protected.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Security Specialties</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Penetration Testing</li>
              <li>• Threat Modeling</li>
              <li>• Secure Architecture</li>
              <li>• OWASP Top 10</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Development Skills</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Full Stack Development</li>
              <li>• API Security</li>
              <li>• Secure Coding</li>
              <li>• DevSecOps</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Methodologies</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Security by Design</li>
              <li>• Defense in Depth</li>
              <li>• Least Privilege</li>
              <li>• Continuous Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
