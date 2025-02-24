"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ProjectShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Daniel's Quaterly Report",
      description:
        "Complete social media strategy and content creation for a leading fashion brand, resulting in 200% engagement increase.",
      tags: ["Social Media", "Content Strategy", "Brand Development"],
      images: [
        "/project1 (1).jpeg",
        "/project1 (13).jpeg",
        "/project1 (12).jpeg",
        "/project1 (11).jpeg",
        "/project1 (10).jpeg",
        "/project1 (9).jpeg",
        "/project1 (8).jpeg",
        "/project1 (7).jpeg",
        "/project1 (6).jpeg",
        "/project1 (5).jpeg",
        "/project1 (4).jpeg",
        "/project1 (3).jpeg",
        "/project1 (2).jpeg",
      ],
      stats: {
        engagement: "+200%",
        followers: "+50K",
        reach: "1M+",
      },
    },
    {
      id: 2,
      title: "Goal setting testimonials",
      description:
        "Some of the feedbacks from a webinar where I spoke on goal setting",
      tags: [
        "Social Media Management",
        "Content Creation",
        "Campaign Strategy",
      ],
      images: [
        "/project2 (1).jpeg",
        "/project2 (7).jpeg",
        "/project2 (6).jpeg",
        "/project2 (5).jpeg",
        "/project2 (4).jpeg",
        "/project2 (3).jpeg",
        "/project2 (2).jpeg",
      ],
      stats: {
        engagement: "+150%",
        followers: "+30K",
        reach: "500K+",
      },
    },
  ];

  const handleProjectClick = (project, index = 0) => {
    setSelectedProject(project);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <motion.section
      initial="initial"
      id="projects"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-rose-900 py-20 px-4 sm:px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-zinc-950 [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto">
            Showcasing successful social media campaigns and brand
            transformations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Project Header */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-200 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 border-y border-white/10">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="p-3 text-center">
                    <p className="text-xl font-bold text-rose-400">{value}</p>
                    <p className="text-xs text-zinc-400 capitalize">{key}</p>
                  </div>
                ))}
              </div>

              {/* Single Project Image */}
              <div className="p-2">
                <div
                  className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => handleProjectClick(project, 0)}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-white font-medium px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      View Full Gallery
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Button */}
              <div className="p-4 text-center">
                <button
                  onClick={() => handleProjectClick(project)}
                  className="w-full py-3 bg-rose-500 hover:bg-rose-600 rounded-full font-medium transition-colors duration-300 text-sm"
                >
                  View All {project.images.length} Images
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery */}
      {selectedProject && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={selectedProject.images.map((src) => ({ src }))}
          plugins={[Thumbnails, Zoom, Slideshow]}
          carousel={{
            finite: true,
            preload: 3,
          }}
          animation={{
            fade: 300,
            swipe: 300,
          }}
          thumbnails={{
            position: "bottom",
            width: 100,
            height: 60,
            border: 2,
            borderRadius: 4,
            padding: 4,
            gap: 16,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
          slideshow={{
            autoplay: false,
            delay: 5000,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, .95)",
            },
            button: {
              filter: "none",
              color: "#fff",
            },
            toolbar: {
              backgroundColor: "transparent",
            },
          }}
        />
      )}
    </motion.section>
  );
};

export default ProjectShowcase;
