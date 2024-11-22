import { Stage, Layer } from "react-konva";
import { Shape, ShapeData } from "./domain/shape";
import { KonvaStrategyContext, KonvaTextStrategy } from "./konva/strategy";
import { Fragment } from "react";

export default class ShapeAdapter {
    shapes: Shape<ShapeData>[]
    constructor(from: Shape<ShapeData>[]) {
        this.shapes = from
    }

    toKonvaStage(): JSX.Element {
        const konvaStrategy = new KonvaStrategyContext();
    
        return (
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              {this.shapes.map((shape, index) => {
                switch (shape.data.type) {
                  case "text": {
                    konvaStrategy.setStrategy(new KonvaTextStrategy());
                    break;
                  }
                  default: {
                    throw new Error(`Unsupported shape type: ${shape.data.type}`);
                  }
                }
    
                // Render the shape directly
                return <Fragment key={index}>{konvaStrategy.render(shape)}</Fragment>;
              })}
            </Layer>
          </Stage>
        );
      }
}