"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[var(--editor-bg)] relative">
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
            <span className="text-[var(--accent-primary)]">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[var(--editor-line)] p-6 rounded-lg h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-[var(--editor-text)]/70 ml-2">about.md</span>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-[var(--editor-text)] text-sm sm:text-base mb-4">
                  I'm a full-stack developer with a strong focus on building modern, scalable, and secure web applications.
                  Currently pursuing cybersecurity at Amar Telidji University, I specialize in software security and best
                  practices for protecting digital systems.
                </p>
                <p className="text-[var(--editor-text)] text-sm sm:text-base mb-4">
                  My passion lies in developing efficient, reliable solutions while continuously exploring AI-driven
                  technologies to enhance security and automation.
                </p>
                <p className="text-[var(--editor-text)] text-sm sm:text-base">
                  With a background in software science and hands-on experience in web development and cybersecurity,
                  I bridge the gap between functionality and security. Whether it's optimizing performance, fortifying
                  applications against threats, or leveraging AI for smarter solutions, I'm always eager to push the
                  boundaries of technology.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[var(--editor-line)] p-6 rounded-lg h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-[var(--editor-text)]/70 ml-2">focus.js</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--accent-primary)] p-3 rounded-md mr-4">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--editor-function)]">Web Development</h3>
                    <p className="text-[var(--editor-text)] text-xs sm:text-sm">Building modern, responsive web applications with React, Next.js, and Node.js</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--accent-secondary)] p-3 rounded-md mr-4">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--editor-function)]">Cybersecurity</h3>
                    <p className="text-[var(--editor-text)] text-xs sm:text-sm">Implementing secure coding practices and protecting applications from threats</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--accent-tertiary)] p-3 rounded-md mr-4">
                    <FaLaptopCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--editor-function)]">Full Stack Solutions</h3>
                    <p className="text-[var(--editor-text)] text-xs sm:text-sm">Creating end-to-end applications with focus on performance and user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
