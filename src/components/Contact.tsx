"use client";

import React, { useState, useRef, FormEvent, ChangeEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string; // Used for internal state management
  email: string; // Used for internal state management
  message: string;
  from_name?: string; // Will be set by the form field
  reply_to?: string; // Will be set by the form field
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    from_name: '',
    reply_to: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Update the form data based on the field name
    if (name === 'from_name') {
      setFormData(prev => ({ ...prev, name: value, from_name: value }));
    } else if (name === 'reply_to') {
      setFormData(prev => ({ ...prev, email: value, reply_to: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formRef.current) return;

    try {
      // Method 1: Using EmailJS directly (client-side)
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '', from_name: '', reply_to: '' });
      } else {
        throw new Error('Failed to send email');
      }

      // Method 2: Using our API route (server-side)
      // Uncomment this if you prefer using the API route
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '', from_name: '', reply_to: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
      */
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[var(--editor-bg)]/90">
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
            <span className="text-[var(--accent-primary)]">Contact Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            className="bg-[var(--editor-line)] rounded-lg p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-[var(--editor-text)]/70 ml-2">contact.js</span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[var(--editor-function)]">Get In Touch</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[var(--editor-variable)] mb-2 text-xs sm:text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--editor-bg)] border border-[var(--editor-line)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] text-[var(--editor-text)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[var(--editor-variable)] mb-2 text-xs sm:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--editor-bg)] border border-[var(--editor-line)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] text-[var(--editor-text)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[var(--editor-variable)] mb-2 text-xs sm:text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[var(--editor-bg)] border border-[var(--editor-line)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] text-[var(--editor-text)] resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md text-white font-medium ${isSubmitting ? 'bg-[var(--accent-primary)]/70' : 'bg-[var(--accent-primary)]'}`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus && (
                <motion.div
                  className={`p-3 rounded-md text-center ${submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="bg-[var(--editor-line)] rounded-lg p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-[var(--editor-text)]/70 ml-2">contact_info.json</span>
            </div>

            <div className="font-mono text-sm mb-6">
              <pre className="bg-[var(--editor-bg)] p-2 sm:p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
                <code>
                  <span className="text-[var(--editor-punctuation)]">{"{"}</span>
                  <br />
                  {"  "}<span className="text-[var(--editor-property)]">"name"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"Smail Mersad"</span><span className="text-[var(--editor-punctuation)]">,</span>
                  <br />
                  {"  "}<span className="text-[var(--editor-property)]">"role"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"Full Stack Developer"</span><span className="text-[var(--editor-punctuation)]">,</span>
                  <br />
                  {"  "}<span className="text-[var(--editor-property)]">"location"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"Algeria"</span><span className="text-[var(--editor-punctuation)]">,</span>
                  <br />
                  {"  "}<span className="text-[var(--editor-property)]">"contact"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-punctuation)]">{"{"}</span>
                  <br />
                  {"    "}<span className="text-[var(--editor-property)]">"email"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"ismailmersad33@gmail.com"</span><span className="text-[var(--editor-punctuation)]">,</span>
                  <br />
                  {"    "}<span className="text-[var(--editor-property)]">"whatsapp"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"+213779990637"</span><span className="text-[var(--editor-punctuation)]">,</span>
                  <br />
                  {"    "}<span className="text-[var(--editor-property)]">"linkedin"</span><span className="text-[var(--editor-punctuation)]">:</span> <span className="text-[var(--editor-string)]">"smail-mersad-3b9174300"</span>
                  <br />
                  {"  "}<span className="text-[var(--editor-punctuation)]">{"}"}</span>
                  <br />
                  <span className="text-[var(--editor-punctuation)]">{"}"}</span>
                </code>
              </pre>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[var(--editor-function)]">Contact Information</h3>

            <div className="space-y-6">
              <motion.a
                href="mailto:ismailmersad33@gmail.com"
                className="flex items-center gap-4 p-4 bg-[var(--editor-bg)] rounded-md hover:bg-[var(--editor-bg)]/70 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-[var(--accent-primary)]">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-[var(--editor-variable)] text-sm sm:text-base font-medium">Email</h4>
                  <p className="text-[var(--editor-text)] text-xs sm:text-sm">ismailmersad33@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/213779990637"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[var(--editor-bg)] rounded-md hover:bg-[var(--editor-bg)]/70 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-secondary)]/20 flex items-center justify-center text-[var(--accent-secondary)]">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <h4 className="text-[var(--editor-variable)] text-sm sm:text-base font-medium">WhatsApp</h4>
                  <p className="text-[var(--editor-text)] text-xs sm:text-sm">+213 779 990 637</p>
                </div>
              </motion.a>

              <motion.a
                href="https://dz.linkedin.com/in/smail-mersad-3b9174300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[var(--editor-bg)] rounded-md hover:bg-[var(--editor-bg)]/70 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[var(--accent-tertiary)]/20 flex items-center justify-center text-[var(--accent-tertiary)]">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <h4 className="text-[var(--editor-variable)] text-sm sm:text-base font-medium">LinkedIn</h4>
                  <p className="text-[var(--editor-text)] text-xs sm:text-sm">smail-mersad-3b9174300</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
