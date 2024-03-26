'use client'
import React from 'react';

const VideoPlayer = ({ video }) => {
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    // Check if window is defined to ensure component runs on the client-side
    if (typeof window !== 'undefined') {
      import('react').then(({ useEffect, useRef }) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jwplayer.com/libraries/smC1HW9J.js';
        script.async = true;

        document.head.appendChild(script);

        script.onload = () => {
          window.jwplayer(playerRef.current).setup({
            file: video.sourceUrl,
            width: '100%',
            aspectratio: '16:9',
            // Add other JW Player options here
          });
        };

        return () => {
          document.head.removeChild(script);
        };
      });
    }
  }, [video]);

  return <div ref={playerRef} className="jw-player" style={{ width: '100%', height: '100%', position: 'relative' }} />;
};

export default VideoPlayer;
