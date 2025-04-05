"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-28 pb-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono mb-4">
              <motion.div
                className="text-[var(--editor-comment)] text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                // Welcome to my portfolio
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-[var(--editor-keyword)]">function</span>{" "}
                <span className="text-[var(--editor-function)]">introduce</span>
                <span className="text-[var(--editor-punctuation)]">() {`{`}</span>
              </motion.div>
            </div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="text-[var(--editor-keyword)]">Hi, I'm </span>
              <span className="text-[var(--accent-primary)]">Smail Mersad</span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[var(--editor-variable)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Full Stack Developer & Cybersecurity Student
            </motion.h2>

            <motion.p
              className="text-lg mb-8 max-w-2xl text-[var(--editor-text)] opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Building modern, secure web applications with a focus on performance and user experience.
            </motion.p>

            <motion.div
              className="font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-[var(--editor-punctuation)]">{`}`}</span>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-[var(--accent-primary)] text-white font-medium rounded-md hover:bg-[var(--accent-primary)]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-[var(--editor-line)] text-[var(--editor-text)] font-medium rounded-md hover:bg-[var(--editor-line)]/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md p-1 bg-gradient-to-br from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-lg">
              <div className="bg-[var(--editor-bg)] p-3 sm:p-4 rounded-md">
                <pre className="text-xs sm:text-sm md:text-base font-mono overflow-x-auto">
                  <code>
                    <span className="text-[var(--editor-keyword)]">class</span>{" "}
                    <span className="text-[var(--editor-class)]">Developer</span>{" "}
                    <span className="text-[var(--editor-punctuation)]">{"{"}</span>
                    <br />
                    {"  "}
                    <span className="text-[var(--editor-keyword)]">constructor</span>
                    <span className="text-[var(--editor-punctuation)]">()</span>{" "}
                    <span className="text-[var(--editor-punctuation)]">{"{"}</span>
                    <br />
                    {"    "}
                    <span className="text-[var(--editor-keyword)]">this</span>
                    <span className="text-[var(--editor-punctuation)]">.</span>
                    <span className="text-[var(--editor-property)]">name</span>{" "}
                    <span className="text-[var(--editor-operator)]">=</span>{" "}
                    <span className="text-[var(--editor-string)]">"Smail Mersad"</span>
                    <span className="text-[var(--editor-punctuation)]">;</span>
                    <br />
                    {"    "}
                    <span className="text-[var(--editor-keyword)]">this</span>
                    <span className="text-[var(--editor-punctuation)]">.</span>
                    <span className="text-[var(--editor-property)]">role</span>{" "}
                    <span className="text-[var(--editor-operator)]">=</span>{" "}
                    <span className="text-[var(--editor-string)]">"Full Stack Developer"</span>
                    <span className="text-[var(--editor-punctuation)]">;</span>
                    <br />
                    {"    "}
                    <span className="text-[var(--editor-keyword)]">this</span>
                    <span className="text-[var(--editor-punctuation)]">.</span>
                    <span className="text-[var(--editor-property)]">education</span>{" "}
                    <span className="text-[var(--editor-operator)]">=</span>{" "}
                    <span className="text-[var(--editor-string)]">"Cybersecurity Student"</span>
                    <span className="text-[var(--editor-punctuation)]">;</span>
                    <br />
                    {"    "}
                    <span className="text-[var(--editor-keyword)]">this</span>
                    <span className="text-[var(--editor-punctuation)]">.</span>
                    <span className="text-[var(--editor-property)]">skills</span>{" "}
                    <span className="text-[var(--editor-operator)]">=</span>{" "}
                    <span className="text-[var(--editor-punctuation)]">[</span>
                    <br />
                    {"      "}
                    <span className="text-[var(--editor-string)]">"JavaScript"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"Python"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"React"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>
                    <br />
                    {"      "}
                    <span className="text-[var(--editor-string)]">"Node.js"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"Next.js"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"Java"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>
                    <br />
                    {"      "}
                    <span className="text-[var(--editor-string)]">"C"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"MongoDB"</span>
                    <span className="text-[var(--editor-punctuation)]">,</span>{" "}
                    <span className="text-[var(--editor-string)]">"PostgreSQL"</span>
                    <br />
                    {"    "}
                    <span className="text-[var(--editor-punctuation)]">];</span>
                    <br />
                    {"  "}
                    <span className="text-[var(--editor-punctuation)]">{"}"}</span>
                    <br />
                    <span className="text-[var(--editor-punctuation)]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-[var(--editor-text)] hover:text-[var(--accent-primary)] transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
