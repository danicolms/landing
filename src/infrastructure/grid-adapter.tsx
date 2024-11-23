import { Stage, Layer } from "react-konva";
import { Shape, ShapeData } from "../domain/shape";
import { KonvaStrategyContext, KonvaTextStrategy } from "./konva/strategy";
import { Fragment } from "react";
import Grid, { ColumnSize } from "../domain/grid";

export default class GridAdapter {
  shapes: Shape<ShapeData>[]
  columnsSize: ColumnSize

  constructor(from: Grid) {
    this.shapes = from.shapes
    this.columnsSize = from.columnSize
  }

  toKonvaStage(): JSX.Element {
    const gridSlotSize = window.innerWidth / this.columnsSize
    const konvaStrategy = new KonvaStrategyContext(gridSlotSize);
  console.log(window.innerWidth, this.columnsSize );
  
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


            return <Fragment key={index}>{konvaStrategy.render(shape)}</Fragment>;
          })}
        </Layer>
      </Stage>
    );
  }
}