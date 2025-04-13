import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-500">About Me</h2>
          <p className="text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-pink-500 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Janet Aborvor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold mb-6">Software Engineer & Problem Solver</h3>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with expertise in web development, 
                cybersecurity, and mobile applications. With over 5 years of professional 
                experience, I specialize in creating secure, performant, and user-friendly 
                digital solutions.
              </p>

              <p className="text-lg mb-4">
                My technical toolkit includes modern JavaScript frameworks (React, Next.js, 
                Node.js), Python, and cloud technologies. I'm particularly interested in 
                building applications that solve real-world problems while maintaining 
                robust security standards.
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-pink-400">Technical Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Next.js', 
                    'Node.js', 'Python', 'Java', 'Cybersecurity',
                    'AWS', 'Docker', 'Kubernetes', 'CI/CD'
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
