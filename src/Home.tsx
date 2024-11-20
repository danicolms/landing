// src/Home.tsx
import React, { useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import UnderConstructionText from './UnderConstructionText';

function Home(): JSX.Element {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

  // Update window size and orientation on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });
      setIsPortrait(width < height); // Check if it's portrait
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const spaceBetweenWords = 20;

  return (
    <div>
      <Stage width={windowSize.width} height={windowSize.height}>
        <UnderConstructionText 
          isPortrait={isPortrait} 
          windowSize={windowSize} 
          spaceBetweenWords={spaceBetweenWords} 
        />
      </Stage>
    </div>
  );
}

export default Home;
