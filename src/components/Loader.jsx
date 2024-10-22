import React, { useState, useEffect } from 'react';

const Loader = ({ onFinish }) => {
  const greetings = [
    "Hello", "स्वागत हे", "Bonjour", "Ciao", "Olá", "おい", "ようこそ", "Hallå", "ସ୍ୱାଗତମ୍‌", "ಸ್ವಾಗತ", "స్వాగతం"
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (currentGreeting < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentGreeting((prev) => prev + 1);
      }, 400); // Change greeting every 1.5 seconds
      return () => clearTimeout(timer);
    } else {
      // Show video after greetings are done
      setShowVideo(true);
      const videoTimer = setTimeout(() => {
        onFinish(); // Call onFinish to signal Loader completion after video plays
      }, 3100); // Video duration, adjust as needed
      return () => clearTimeout(videoTimer);
    }
  }, [currentGreeting, onFinish]);

  return (
    <div className="h-screen w-full bg-zinc-800 flex items-center justify-center">
      {!showVideo ? (
        <div className="text-white text-5xl">
          {greetings[currentGreeting]}
        </div>
      ) : (
        <video autoPlay className="h-screen w-full object-contain bg-black">
          <source src="/videos/preloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Loader;
