import { Stage, Layer } from "react-konva";
import { Shape, ShapeData } from "./domain/shape";
import { KonvaStrategyContext, KonvaTextStrategy } from "./konva/strategy";

export default class ShapeAdapter {
    shapes: Shape<ShapeData>[]
    constructor(from: Shape<ShapeData>[]) {
        this.shapes = from
    }

    toKonvaStage(): JSX.Element {
        const konvaStrategy = new KonvaStrategyContext()
        const shapes: JSX.Element[] = this.shapes.map((shape) => {
            console.log(JSON.stringify(shape));
            
            switch (shape.data.type) {
                case "text": {
                    konvaStrategy.setStrategy(new KonvaTextStrategy())
                }
            }


            return konvaStrategy.render(shape)
        })

        return <Stage width={window.innerWidth} height={window.innerHeight}><Layer>{shapes}</Layer> </Stage>
    }
}