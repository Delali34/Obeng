"use client";

import React, { useEffect } from "react";

const VideoEmbed = ({ video }) => {
  useEffect(() => {
    // Load platform-specific embed scripts
    const script = document.createElement("script");
    script.src =
      video.platform === "tiktok"
        ? "https://www.tiktok.com/embed.js"
        : "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [video]);

  if (!video.videoId) {
    return (
      <div className="p-4 text-red-400">
        Error: Could not extract video ID from URL
      </div>
    );
  }

  if (video.platform === "tiktok") {
    return (
      <blockquote
        className="tiktok-embed rounded-xl overflow-hidden"
        cite={video.url}
        data-video-id={video.videoId}
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section></section>
      </blockquote>
    );
  }

  if (video.platform === "instagram") {
    return (
      <blockquote
        className="instagram-media rounded-xl overflow-hidden"
        data-instgrm-permalink={video.url}
        data-instgrm-version="14"
        style={{ maxWidth: "540px", minWidth: "325px" }}
      ></blockquote>
    );
  }

  return null;
};

export default VideoEmbed;
