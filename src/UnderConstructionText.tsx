// src/UnderConstructionText.tsx
import React from 'react';
import { Layer, Text, Rect } from 'react-konva';

interface WordConfig {
    text: string;
    fontFamily: string;
    fontSize: number;
    color: string;
    letterSpacing?: number;
    backgroundColor?: string;
    fontStyle?: string;
}

interface UnderConstructionTextProps {
    startX: number;
    positionY: number;
    spaceBetweenWords: number;
}

function UnderConstructionText({ startX, positionY, spaceBetweenWords }: UnderConstructionTextProps): JSX.Element {
    const words: WordConfig[] = [
        {
            text: "THIS",
            fontFamily: "Montserrat",
            fontSize: 70,
            color: "#FF5733",
            fontStyle: "bold"
        },
        {
            text: "Revelation",
            fontFamily: "Fascinate",
            fontSize: 50,
            color: "#C70039"
        },
        {
            text: "is under",
            fontFamily:`"Edu AU VIC WA NT Pre", cursive`,
            fontSize: 30,
            color: "#900C3F"
        },
        {
            text: "CONSTRUCTION",
            fontFamily: "Montserrat",
            fontSize: 40,
            color: "#000000", // Black text
            letterSpacing: 2,
            backgroundColor: "#FFC300" // Yellow background
        }
    ];

    return (
        <Layer>
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    {word.backgroundColor && (
                        <Rect
                            x={startX + index * (words[0].fontSize + spaceBetweenWords)}
                            y={positionY - word.fontSize / 4}
                            width={word.fontSize * word.text.length}
                            height={word.fontSize * 1.5}
                            fill={word.backgroundColor}
                        />
                    )}
                    <Text
                        text={word.text}
                        fontFamily={word.fontFamily}
                        fontSize={word.fontSize}
                        x={startX + index * (words[0].fontSize + spaceBetweenWords)}
                        y={positionY}
                        fill={word.color}
                        letterSpacing={word.letterSpacing || 0}
                        fontStyle={word.fontStyle || 'normal'}
                        draggable={true}
                    />
                </React.Fragment>
            ))}
        </Layer>
    );
}

export default UnderConstructionText;
