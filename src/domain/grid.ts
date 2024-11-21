import { Shape } from "./shape"


export enum ColumnSize {
    "S",
    "M",
    "L",
}



export default class Grid {
    shapes: Shape[] = []
    columnSize: ColumnSize

    constructor(columnSize: ColumnSize) {
        this.columnSize = columnSize
    }

    addShapes(shapes: Shape[]): void {
        this.shapes = [...this.shapes, ...shapes]
    }

    compute(): Shape[] {
        return this.shapes
    }


}