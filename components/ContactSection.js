"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ContactSection = () => {
  return (
    <motion.section
      id="contacts"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-rose-900 py-20 px-4 sm:px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-zinc-950 [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200">
            Let's Create Together
          </h2>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto">
            Ready to transform your social media presence? Let's connect and
            make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={fadeIn} className="space-y-8 lg:p-8">
            {/* Quick Connect */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Connect
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:afiaobeng24@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Email Me At</p>
                    <p className="text-white">afiaobeng24@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+17097273093"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Call Me At</p>
                    <p className="text-white">+1 (709) 727-3093</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Platforms */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Social Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/afia-obeng-614684181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-white">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/afiaobeng__?igsh=Y2l3MDlxdWV3ZDZl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-white">Instagram</span>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.589 6.686a4.793 4.793 0 0 0-3.77-4.056V2h-3.08v13.74a2.55 2.55 0 0 1-2.184 2.55 2.55 2.55 0 0 1-2.92-2.53 2.55 2.55 0 0 1 3.29-2.43V9.78a6.105 6.105 0 0 0-7.97 5.8 6.105 6.105 0 0 0 6.08 6.11 6.105 6.105 0 0 0 6.09-6.11l-.002-9.95a8.13 8.13 0 0 0 4.077 1.05v-3.99a4.82 4.82 0 0 1-3.61-1.03z" />
                    </svg>
                  </div>
                  <span className="text-white">TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:border-rose-400 transition-colors text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:border-rose-400 transition-colors text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:border-rose-400 transition-colors text-white"
                    placeholder="What's your project about?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl font-medium text-white hover:opacity-90 transition-opacity"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
