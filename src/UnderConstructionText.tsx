import React from 'react';
import { Layer, Text, Rect } from 'react-konva';

interface WordConfig {
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
}

interface UnderConstructionTextProps {
  isPortrait: boolean;
  windowSize: { width: number; height: number };
  spaceBetweenWords: number;
}

function UnderConstructionText({ isPortrait, windowSize, spaceBetweenWords }: UnderConstructionTextProps): JSX.Element {
  const words: WordConfig[] = [
    {
      text: "THIS",
      fontFamily: "Montserrat",
      fontSize: 70,
      color: "#FF5733",
    },
    {
      text: "Revelation",
      fontFamily: "Fascinate",
      fontSize: 50,
      color: "#C70039"
    },
    {
      text: "is under",
      fontFamily: '"Edu AU VIC WA NT Pre", cursive',
      fontSize: 30,
      color: "#900C3F"
    },
    {
      text: "CONSTRUCTION",
      fontFamily: "Montserrat",
      fontSize: 40,
      color: "#000000"
    }
  ];

  let positions = [];

  if (isPortrait) {
    let yPosition = (windowSize.height / 2) / (words.length + 1);
    positions = words.map((word, index) => ({
      xPosition: 0,
      yPosition: yPosition * index
    }));
  } else {
    positions = [
      { xPosition: (windowSize.width / 4) - (words[0].fontSize * words[0].text.length / 2), yPosition: windowSize.height / 3 },
      { xPosition: (windowSize.width / 4) + (words[0].fontSize * words[0].text.length + spaceBetweenWords), yPosition: windowSize.height / 3 },
      { xPosition: (windowSize.width / 4) - (words[2].fontSize * words[2].text.length / 2), yPosition: (windowSize.height / 3) + words[0].fontSize + spaceBetweenWords },
      { xPosition: (windowSize.width / 4) - (words[3].fontSize * words[3].text.length / 2), yPosition: (windowSize.height / 3) + words[0].fontSize * 2 + spaceBetweenWords * 2 }
    ];
  }

  return (
    <Layer>
      {words.map((word, index) => (

        <Text
          key={word.text + index}
          text={word.text}
          fontFamily={word.fontFamily}
          fontSize={word.fontSize}
          x={positions[index].xPosition}
          y={positions[index].yPosition}
          fill={word.color}
        />

      ))}
    </Layer>
  );
}

export default UnderConstructionText;
