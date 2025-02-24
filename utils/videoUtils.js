const extractTikTokId = (url) => {
  try {
    // Handle vm.tiktok.com short URLs
    if (url.includes("vm.tiktok.com")) {
      const shortId = url.split("/").pop();
      return shortId;
    }

    // Handle regular video URLs
    const videoIdMatch = url.match(/video\/(\d+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }

    // Handle /t/ format URLs
    const tFormatMatch = url.match(/t\/([A-Za-z0-9]+)/);
    if (tFormatMatch) {
      return tFormatMatch[1];
    }

    return null;
  } catch (error) {
    console.error("Error extracting TikTok ID:", error);
    return null;
  }
};

const extractInstagramId = (url) => {
  try {
    // Match the ID between /reel/ or /p/ and the next slash or end of string
    const match = url.match(/\/(reel|p)\/([A-Za-z0-9_-]+)/);
    if (match) {
      return match[2];
    }

    // Handle share URLs
    const shareMatch = url.match(/\/share\/reel\/([A-Za-z0-9_-]+)/);
    if (shareMatch) {
      return shareMatch[1];
    }

    return null;
  } catch (error) {
    console.error("Error extracting Instagram ID:", error);
    return null;
  }
};

export { extractTikTokId, extractInstagramId };
