"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItems = ["About", "Projects", "Portfolio", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-purple-900/95 to-rose-900/95 backdrop-blur-md z-50 p-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-200 hover:text-rose-400"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <nav className="mt-16">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 10 }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={onClose}
                      className="block py-2 text-zinc-200 hover:text-rose-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex justify-around">
                {["Instagram", "TikTok", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-zinc-200 hover:text-rose-400 transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of background images
  const backgroundImages = [
    "/obeng (1).jpeg",
    "/obeng.jpeg",
    "/obeng (2).jpeg",
  ];

  // Handle image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/afiaobeng__?igsh=Y2l3MDlxdWV3ZDZl",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@afiaobeng__?_t=ZM-8uBpuxtbV4f&_r=1",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/afia-obeng-614684181",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-zinc-100 overflow-hidden"
    >
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-screen transition-all duration-1000 ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={index === 0}
            className="z-0"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-rose-900/40 z-10" />
          <div className="absolute inset-0 h-full bg-black/60 z-20" />
        </div>
      ))}

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-rose-400 w-6"
                : "bg-zinc-400/50 hover:bg-zinc-300/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-30 text-center max-w-4xl mx-auto"
      >
        <motion.div variants={fadeIn} className="mb-6">
          <h2 className="text-lg md:text-xl font-light tracking-wider text-rose-200">
            DIGITAL CREATOR
          </h2>
        </motion.div>

        <motion.h1
          variants={fadeIn}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200">
            Afia Tiwaa Obeng
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto mb-12"
        >
          Transforming brands into digital success stories through strategic
          social media management and creative storytelling
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/#portfolio">
            <button className="px-8 py-3 bg-rose-500 hover:bg-rose-600 rounded-full font-medium transition-colors duration-300">
              View Portfolio
            </button>
          </Link>
          <Link href="/#contact">
            <button className="px-8 py-3 bg-transparent border-2 border-rose-300 hover:bg-rose-500/10 rounded-full font-medium transition-colors duration-300">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center backdrop-blur-sm">
              <p className="text-xl font-bold tracking-tight">
                <span className="text-rose-400">A</span>
                <span className="text-purple-300">TO</span>
              </p>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="fixed left-6 bottom-6 z-40"
      >
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-200 hover:text-rose-400 transition-colors text-sm duration-300 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full"
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 right-6 z-40"
      >
        <nav className="hidden md:flex items-center space-x-4">
          {["About", "Projects", "Portfolio", "Contact"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-200 hover:text-rose-400 transition-colors duration-300 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-zinc-200 hover:text-rose-400 transition-colors duration-300 backdrop-blur-sm bg-white/5 p-2 rounded-full"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.div>
  );
};

export default HeroSection;
