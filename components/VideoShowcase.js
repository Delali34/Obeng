"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const VideoCard = ({ video }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Header */}
      <div className="p-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center">
            {video.platform === "tiktok" ? (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.2V9.39a7.71 7.71 0 003.45.77V6.69z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-white text-sm font-medium">{video.campaign}</h3>
            <p className="text-zinc-400 text-xs">{video.date}</p>
          </div>
        </div>
        <div className="bg-white/10 px-2 py-1 rounded-full">
          <span className="text-xs text-white">{video.category}</span>
        </div>
      </div>

      {/* Video Container with Permanent Overlay */}
      <div className="relative">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[4/5] overflow-hidden"
        >
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />

          {/* Permanent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </a>

        {/* Always Visible Metrics */}
        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-white text-xs">
                  {video.metrics.likes}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                </svg>
                <span className="text-white text-xs">
                  {video.metrics.comments}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
              </svg>
              <span className="text-white text-xs">{video.metrics.shares}</span>
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2">
            <p className="text-white text-xs">{video.impact}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {video.results.map((result, index) => (
                <span
                  key={index}
                  className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full"
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      platform: "instagram",
      url: "https://www.instagram.com/share/reel/BAKHE8VHQD",
      videoUrl: "/insta (1).mp4",
      campaign: "Food brand",
      date: "May 2024",
      category: "Food",
      metrics: {
        likes: "45",
        comments: "1",
        shares: "0",
      },
      impact: "100% engagement increase in 48hrs",
      results: ["+200% Traffic", "1.4K Followers", "98% Positive"],
    },
    {
      id: 2,
      platform: "instagram",
      url: "https://www.instagram.com/share/reel/BAFBCjW38p",
      videoUrl: "/insta (2).mp4",
      campaign: "Food brand",
      date: "Sept 2023",
      category: "Food",
      metrics: {
        likes: "52",
        comments: "1",
        shares: "0",
      },
      impact: "100% engagement in 72hours",
      results: ["100% traffic", "4k followers", "99% positive"],
    },
    {
      id: 3,
      platform: "instagram",
      url: "https://www.instagram.com/share/reel/_uuOvpZSe",
      videoUrl: "/insta (3).mp4",
      campaign: "Planning",
      date: "April 2024",
      category: "Planning",
      metrics: {
        likes: "36",
        comments: "1",
        shares: "0",
      },
      impact: "50% engagement in 48hours",
      results: ["100% traffic", "1.4k followers", "99% positive"],
    },
    {
      id: 4,
      platform: "instagram",
      url: "https://www.instagram.com/reel/C7WT4nzCUo-/?igsh=QkFlT2t2R1JMQQ%3D%3D",
      videoUrl: "/insta (4).mp4",
      campaign: "Drink ad",
      date: "Sept 2023",
      category: "Food",
      metrics: {
        likes: "55",
        comments: "1",
        shares: "0",
      },
      impact: "50% engagement in 48hours",
      results: ["100% traffic", "1.4k followers", "99% positive"],
    },
    {
      id: 5,
      platform: "tiktok",
      url: "https://vm.tiktok.com/ZMkT2k12u/",
      videoUrl: "/tik.mp4",
      campaign: "Food brand",
      date: "Feb 2024",
      category: "Health",
      metrics: {
        likes: "1.4k",
        comments: "28",
        shares: "31",
      },
      impact: "50% engagement in 48hours",
      results: ["100% traffic", "7.3k followers", "99% positive"],
    },
    {
      id: 6,
      platform: "tiktok",
      url: "https://vm.tiktok.com/ZMkT2jU1V/",
      videoUrl: "/tik1.mp4",
      campaign: "Food brand",
      date: "Sept 2023",
      category: "Food",
      metrics: {
        likes: "609",
        comments: "5",
        shares: "8",
      },
      impact: "50% engagement in 48hours",
      results: ["100% traffic", "7.3k followers", "99% positive"],
    },
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-rose-900 py-20 px-4 sm:px-6"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-zinc-950 [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-purple-200">
            Campaign Showcase
          </h2>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto">
            Transforming brands through strategic social media campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoShowcase;
