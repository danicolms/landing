import { Stage } from "react-konva";
import Grid from "./domain/grid";
import { ReactElement } from "react";
import { Shape } from "./domain/shape";

export default class ShapeAdapter {
    shapes: Shape[]
    constructor(from: Shape[]) {
        this.shapes = from
    }

    toKonvaStage(): typeof Stage {
        return Stage 
    }
}