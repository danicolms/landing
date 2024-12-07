import { Text as KonvaText } from "react-konva";
import { Shape, ShapeData, TextData } from "../domain/shape";

interface KonvaElementStrategy {
    render(shape: Shape<ShapeData>): JSX.Element
}

export class KonvaTextStrategy implements KonvaElementStrategy {
    render(shape: Shape<TextData>): JSX.Element {
        const { fontSize, text } = shape.data
     
        return <KonvaText text={text} fontSize={fontSize} x={0} y={0} fill="black"/>
    }
}

export class KonvaStrategyContext {
    strategy: KonvaElementStrategy | undefined

    setStrategy(strategy: KonvaElementStrategy) {
        this.strategy = strategy
    }

    render(shape: Shape<ShapeData>): JSX.Element {
        if (!this.strategy) throw new Error("No Konva strategy selected")
        return this.strategy.render(shape)
    }

}