"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--editor-bg)] border-t border-[var(--editor-line)] py-6 sm:py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[var(--editor-comment)] text-sm sm:text-base">
              <span className="text-[var(--editor-keyword)]">const</span>{" "}
              <span className="text-[var(--editor-variable)]">footerText</span>{" "}
              <span className="text-[var(--editor-operator)]">=</span>{" "}
              <span className="text-[var(--editor-string)]">"Thank you for visiting!"</span>;
            </div>
            <p className="text-[var(--editor-text)] text-xs sm:text-sm mt-2">
              © {currentYear} Smail Mersad. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            <motion.a
              href="https://dz.linkedin.com/in/smail-mersad-3b9174300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--editor-line)] flex items-center justify-center text-[var(--editor-text)] hover:bg-[var(--accent-secondary)]/20 hover:text-[var(--accent-secondary)] transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:ismailmersad33@gmail.com"
              className="w-10 h-10 rounded-full bg-[var(--editor-line)] flex items-center justify-center text-[var(--editor-text)] hover:bg-[var(--accent-tertiary)]/20 hover:text-[var(--accent-tertiary)] transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaEnvelope size={18} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 sm:mt-8 text-center text-[var(--editor-text)]/70 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            Built with{" "}
            <span className="text-red-500">
              <FaHeart className="inline" size={10} />
            </span>{" "}
            using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
