import React, { useState } from "react"
import { Stage, Layer, Text, Circle } from 'react-konva';

export default function Home(){
  const [isEditMode, setIsEditMode] = useState(false)

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text x={200} y={200} text="THIS" fontSize={100} draggable={isEditMode}/>
            <Text x={225} y={250} text="Revelation" fontSize={64} draggable={isEditMode}/>
            <Text x={195} y={300} text="is under" fontSize={24} draggable={isEditMode}/>
            <Text x={200} y={400} text="CONSTRUCTION" fontSize={32} draggable={isEditMode}/>
          </Layer>
          <Layer>
            <Circle onClick={() => setIsEditMode(true)}  width={200} height={100} fill="blue"/>
          </Layer>
        </Stage>
      );
}