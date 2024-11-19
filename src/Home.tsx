// src/Home.tsx
import React, { useEffect, useState } from 'react';
import { Stage } from 'react-konva';
import UnderConstructionText from './UnderConstructionText';

function Home(): JSX.Element {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const spaceBetweenWords = 20;
  const startX = (windowSize.width - (4 - 1) * (70 + spaceBetweenWords)) / 2;
  const positionY = windowSize.height / 2;

  return (
    <div>
      <Stage width={windowSize.width} height={windowSize.height}>
        <UnderConstructionText
          startX={startX}
          positionY={positionY}
          spaceBetweenWords={spaceBetweenWords}
        />
      </Stage>
    </div>
  );
}

export default Home;
