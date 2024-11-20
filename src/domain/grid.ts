import { Shape } from "./shape"


export enum ColumnSize {
    "S",
    "M",
    "L",
}



export default class Grid  {
    shapes: Shape[] = []
    columnSize: ColumnSize

    constructor(columnSize: ColumnSize) {
        this.columnSize = columnSize
    }

    addShape(shape: Shape) {
        this.shapes.push(shape)
    }

    compute() {
        return this.shapes
    }


}