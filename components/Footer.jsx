import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 custom-name-color">Janet Aborvor</h3>
            <p className="mb-4">
              Software Engineer specializing in web development, cybersecurity, and mobile applications.
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/jane93techgirl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.195 22 16.418 22 12.017 22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/janet-aborvor-129730302"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/AbenarhMcginley"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-pink-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-pink-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-pink-400 transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-pink-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Janet Aborvor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
