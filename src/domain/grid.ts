import { Shape, ShapeData } from "./shape"

export enum ColumnSize {
    "S",
    "M",
    "L",
}

export default class Grid {
    shapes: Shape<ShapeData>[] = []
    columnSize: ColumnSize

    constructor(columnSize: ColumnSize) {
        this.columnSize = columnSize
    }

    addShapes(shapes: Shape<ShapeData>[]): void {
        this.shapes = [...this.shapes, ...shapes]
    }

    filterOverflownShapes(): void {

    }
}