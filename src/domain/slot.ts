import { ColumnSize } from "./grid";

type Coordinate = {
  x: number;
  y: number;
};

export type Slot = {
  columnsSize: ColumnSize;
  from: Coordinate;
  to: Coordinate;
};
