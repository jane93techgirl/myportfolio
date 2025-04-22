'use client';
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-10 text-center">
          My Cybersecurity & Development Expertise
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I’m a <span className="text-white font-semibold">Cybersecurity Analyst, Web Developer, and Programmer</span> driven by a passion for secure, high-performance digital experiences. I craft resilient applications that balance user experience with airtight security.
          </p>

          <p>
            From <span className="text-white font-semibold">penetration testing and vulnerability assessments</span> to building modern, scalable web applications—I integrate security at every layer of the stack. I don’t just write code. I engineer digital fortresses.
          </p>

          <p>
            My core toolkit includes <span className="text-white font-semibold">React, Node.js, Python, and Java/Kotlin</span>. I deliver solutions that are powerful, elegant, and built with security-first principles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Security */}
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-pink-400 mb-4">Security Specialties</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Penetration Testing</li>
              <li>• Threat Modeling</li>
              <li>• Secure Architecture</li>
              <li>• OWASP Top 10</li>
            </ul>
          </div>

          {/* Development */}
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-pink-400 mb-4">Development Skills</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Full Stack Development</li>
              <li>• API Security</li>
              <li>• Secure Coding Practices</li>
              <li>• DevSecOps</li>
            </ul>
          </div>

          {/* Methodologies */}
          <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-pink-400 mb-4">Methodologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Security by Design</li>
              <li>• Defense in Depth</li>
              <li>• Principle of Least Privilege</li>
              <li>• Continuous Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
