import { Text as KonvaText } from "react-konva";
import { Shape, ShapeData, TextData } from "../../domain/shape";
import { ColumnSize } from "../../domain/grid";

interface KonvaElementStrategy {
    render(shape: Shape<ShapeData>, gridSlotSize: number): JSX.Element
}

export class KonvaTextStrategy implements KonvaElementStrategy {
    render(shape: Shape<TextData>, slotSize: number): JSX.Element {
        const { fontSize, text } = shape.data

        console.log(slotSize);
        
        return <KonvaText text={text} fontSize={fontSize} x={shape.slots.from.x * slotSize} y={shape.slots.from.y * slotSize} fill="black" />
    }
}

export class KonvaStrategyContext {
    strategy: KonvaElementStrategy | undefined
    slotSize: number

    constructor(slotSize: number) {
        this.slotSize = slotSize
    }

    setStrategy(strategy: KonvaElementStrategy) {
        this.strategy = strategy
    }

    render(shape: Shape<ShapeData>): JSX.Element {
        if (!this.strategy) throw new Error("No Konva strategy selected")
        return this.strategy.render(shape, this.slotSize)
    }

}