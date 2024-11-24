import { Text as KonvaText } from "react-konva";
import { Shape, ShapeData, TextData } from "../../domain/shape";
import { Slot } from "../../domain/slot";

interface KonvaElementStrategy {
  render(shape: Shape<ShapeData>, gridSlotSize: number): JSX.Element;
}

export class KonvaTextStrategy implements KonvaElementStrategy {
  render(shape: Shape<TextData>, slotSize: number): JSX.Element {
    const { fontSize, text, color } = shape.data;

    // NOTE: Since we filter all the other slots
    // on the grid filter function, this will always be type Slot.
    const { from, to } = shape.slots as Slot

    return (
      <KonvaText
        text={text}
        fontSize={fontSize}
        x={from.x * slotSize}
        y={from.y * slotSize}
        width={(to.x - from.x) * slotSize}
        height={(to.y - from.y) * slotSize}
        fill={color}
      />
    );
  }
}

export class KonvaStrategyContext {
  strategy: KonvaElementStrategy | undefined;
  slotSize: number;

  constructor(slotSize: number) {
    this.slotSize = slotSize;
  }

  setStrategy(strategy: KonvaElementStrategy) {
    this.strategy = strategy;
  }

  render(shape: Shape<ShapeData>): JSX.Element {
    if (!this.strategy) throw new Error("No Konva strategy selected");
    return this.strategy.render(shape, this.slotSize);
  }
}
