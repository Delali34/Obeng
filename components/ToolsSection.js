"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ToolsSection = () => {
  const tools = {
    "Content Creation": [
      {
        name: "Capcut",
        proficiency: 90,
        description: "Video editing & post-production",
        icon: "🎬",
      },
      // {
      //   name: "Adobe After Effects",
      //   proficiency: 85,
      //   description: "Motion graphics & visual effects",
      //   icon: "✨",
      // },
      {
        name: "Canva",
        proficiency: 95,
        description: "Quick social media graphics",
        icon: "🎨",
      },
      // {
      //   name: "Adobe Photoshop",
      //   proficiency: 88,
      //   description: "Image editing & manipulation",
      //   icon: "🖼️",
      // },
    ],
    "Social Media Management": [
      {
        name: "HeyOrca",
        proficiency: 95,
        description: "Social media scheduling",
        icon: "📊",
      },
      {
        name: "Meta Business Suite",
        proficiency: 95,
        description: "Facebook & Instagram management",
        icon: "📱",
      },
      {
        name: "TikTok Business Center",
        proficiency: 92,
        description: "TikTok content & analytics",
        icon: "🎵",
      },
    ],
    "Analytics & Strategy": [
      {
        name: "Google Analytics",
        proficiency: 90,
        description: "Traffic & conversion tracking",
        icon: "📈",
      },
      {
        name: "Meta Ads Manager",
        proficiency: 92,
        description: "Ad campaign optimization",
        icon: "🎯",
      },
      // {
      //   name: "Sprout Social",
      //   proficiency: 85,
      //   description: "Social listening & reporting",
      //   icon: "👥",
      // },
      {
        name: "Mailchimp",
        proficiency: 88,
        description: "Email marketing campaigns",
        icon: "📧",
      },
    ],
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-rose-900 py-20 px-4 sm:px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-zinc-950 [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200">
            Tools & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto">
            Leveraging industry-leading tools to create impactful social media
            campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(tools).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category}
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {items.map((tool) => (
                  <div key={tool.name} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-white">
                            {tool.name}
                          </span>
                          <span className="text-sm text-rose-400">
                            {tool.proficiency}%
                          </span>
                        </div>
                        <p className="text-sm text-zinc-400">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.proficiency}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ToolsSection;
