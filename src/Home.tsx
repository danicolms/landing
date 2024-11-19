import React from 'react';
import { Stage, Layer } from 'react-konva';

function Home(): JSX.Element {
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* You can add shapes here later */}
        </Layer>
      </Stage>
    </div>
  );
}

export default Home;
