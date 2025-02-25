"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariant = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      initial="initial"
      id="about"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-900 via-rose-900 to-black py-20 px-4 sm:px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-zinc-950 [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={staggerChildren} className="text-center mb-16">
          <motion.h2
            variants={fadeIn}
            className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto"
          >
            A Digital Creator, Podcast Enthusiast, and Communications Strategist
            with 4+ years of experience in developing impactful strategies that
            foster engaged and thriving communities.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={staggerChildren} className="space-y-8">
            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-rose-300 mb-4">
                Strategic Expertise
              </h3>
              <p className="text-zinc-200">
                Crafting innovative social media strategies that drive
                engagement and build meaningful connections with your audience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                Creative Vision
              </h3>
              <p className="text-zinc-200">
                Creating visually stunning content that captures attention and
                tells your brand's unique story.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-rose-300 mb-4">
                Results Driven
              </h3>
              <p className="text-zinc-200">
                Delivering measurable results through data-driven strategies and
                continuous optimization.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 gap-6 relative"
          >
            {/* Large Image */}
            <motion.div
              variants={imageVariant}
              className="col-span-2 transform translate-y-8"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/obeng (2).jpeg"
                  alt="Social Media Strategy"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Small Images */}
            <motion.div
              variants={imageVariant}
              className="relative h-48 rounded-2xl overflow-hidden"
            >
              <Image
                src="/obeng (1).jpeg"
                alt="Creative Content"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={imageVariant}
              className="relative h-48 rounded-2xl overflow-hidden"
            >
              <Image
                src="/obeng.jpeg"
                alt="Brand Strategy"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
