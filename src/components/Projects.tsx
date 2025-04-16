"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "BarberFlow – Barbershop Lead-Gen Site",
      description: "A sleek, animated website for a modern barbershop, built to drive bookings and showcase services with style.",
      image: "/images/projects/barbershop.png",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      liveLink: "https://primecuts.netlify.app/",
      githubLink: null
    },
    {
      title: "Plumbing Business Lead Generation Website",
      description: "A lead generation website for a plumbing business, designed to attract potential customers and convert visitors into leads.",
      image: "/images/projects/plumbingbuisness.png",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      liveLink: "https://plumberpreview-falconmer-smailmersads-projects.vercel.app/",
      githubLink: null
    },
    // You can add more projects here in the future
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[var(--editor-bg)]">
      <div className="container mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-[var(--editor-comment)]">// </span>
            <span className="text-[var(--accent-primary)]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[var(--editor-line)] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/2 relative">
                  <div className="aspect-[1897/915] relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>

                <div className="md:w-1/2 p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-[var(--editor-text)]/70 ml-2">{project.title.toLowerCase().replace(/\s+/g, '-')}.jsx</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--editor-function)]">{project.title}</h3>

                  <p className="text-[var(--editor-text)] text-sm sm:text-base mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 text-[var(--editor-keyword)]">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--editor-bg)] text-[var(--editor-variable)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--accent-primary)] text-white rounded-md text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--editor-bg)] text-[var(--editor-text)] border border-[var(--editor-border)] rounded-md text-xs sm:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaCode /> View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[var(--editor-comment)] italic">More projects coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
