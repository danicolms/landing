import { Shape, ShapeData } from "./shape";

export enum ColumnSize {
  S = 6,
  M = 8,
  L = 12,
}

export default class Grid {
  shapes: Shape<ShapeData>[] = [];
  columnSize: ColumnSize;

  constructor(columnSize: ColumnSize) {
    this.columnSize = columnSize;
  }

  addShapes(shapes: Shape<ShapeData>[]): void {
    this.shapes = [...this.shapes, ...shapes];
  }

  filterOverflownShapes(): void {}
}
