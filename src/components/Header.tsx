"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--editor-bg)] border-b border-[var(--editor-line)] py-4 px-4 sm:px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-[var(--accent-primary)] font-mono text-lg sm:text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-[var(--editor-keyword)]">const</span>{" "}
          <span className="text-[var(--editor-variable)]">developer</span>{" "}
          <span className="text-[var(--editor-operator)]}">= </span>
          <span className="text-[var(--editor-string)]">"Smail Mersad"</span>;
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.li key={index} whileHover={{ y: -2 }} className="relative group">
                <Link
                  href={item.href}
                  className="text-[var(--editor-text)] hover:text-[var(--accent-primary)] transition-colors font-medium"
                >
                  {item.label}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex space-x-4">
          <motion.a
            href="https://dz.linkedin.com/in/smail-mersad-3b9174300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--editor-line)] text-[var(--editor-text)] hover:bg-[var(--accent-secondary)]/20 hover:text-[var(--accent-secondary)] transition-colors"
          >
            <FaLinkedin size={18} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[var(--editor-text)] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[73px] bg-[var(--editor-bg)] z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-6 px-4">
              <nav className="mb-8">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-[var(--editor-line)] pb-2"
                    >
                      <Link
                        href={item.href}
                        className="text-[var(--editor-text)] text-lg block py-2"
                        onClick={closeMenu}
                      >
                        <span className="text-[var(--accent-primary)]">&gt;</span> {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://dz.linkedin.com/in/smail-mersad-3b9174300"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--editor-line)] text-[var(--editor-text)] hover:bg-[var(--accent-secondary)]/20 hover:text-[var(--accent-secondary)] transition-colors"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
