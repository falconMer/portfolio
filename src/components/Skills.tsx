"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaCode, FaLaptopCode
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "C", icon: <FaCode />, color: "#A8B9CC" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <FaLaptopCode />, color: "#000000" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Database Design", icon: <FaDatabase />, color: "#FF6B6B" },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-[var(--editor-bg)]/80">
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
            <span className="text-[var(--accent-primary)]">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[var(--editor-line)] rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--editor-keyword)]">{category.title}</h3>

              <motion.div
                className="grid grid-cols-1 xs:grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center"
                    variants={item}
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-2"
                      style={{ backgroundColor: `${skill.color}20` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xl sm:text-2xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                    </motion.div>
                    <span className="text-xs sm:text-sm text-[var(--editor-text)]">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-[var(--editor-line)] rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--editor-keyword)]">Soft Skills</h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {["Problem-Solving", "Fast Learner", "Strong Analytical Thinking", "Team Collaboration"].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[var(--editor-bg)] rounded-md p-4 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-[var(--editor-variable)]">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
