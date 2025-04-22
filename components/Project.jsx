'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "My Work Project",
    description: "A showcase of my recent work and projects.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
    image: "/images/project2.jpg"
  },
  {
    title: "Coding Project",
    description: "A collection of code samples and programming work.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "#",
    image: "/images/Code.jpg"
  },
  {
    title: "Web Elements",
    description: "Various web components and UI elements I've created.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "/images/coding elements.jpg"
  },
  {
    title: "Profile Project",
    description: "My personal profile and professional information.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
    image: "/images/profile.jpg"
  },
  {
    title: "Python Application",
    description: "A Python-based application showcasing data processing capabilities.",
    tech: ["Python", "Pandas", "Flask"],
    link: "#",
    image: "/images/python.jpg"
  },
  {
    title: "HTML Project",
    description: "A responsive website built with modern HTML and CSS techniques.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
    image: "/images/HTML Projects(1).jpg"
  }
];

export default function Projects() {
  console.log('Rendering Projects component');
  console.log('Projects data:', projects);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-500">Projects</h2>
          <p className="text-xl mt-4 text-gray-300">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border border-gray-700 hover:border-pink-500"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
