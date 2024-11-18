import React from "react"
import { Stage, Layer, Text } from 'react-konva';

export default function Home(){
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="This site is under construction" fontSize={64} draggable={true}/>
          </Layer>
        </Stage>
      );
}