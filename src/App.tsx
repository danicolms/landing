import React from 'react';
import Grid, { ColumnSize } from './domain/grid';
import { Shape, TextData } from './domain/shape';
import { Slot } from './domain/slot';

export default function App(): JSX.Element {
  const grid = new Grid(ColumnSize.L)

  const titleSlot: Slot = { from: { x: 1, y: 1 }, to: { x: 2, y: 2 } }

  const titleData: TextData = {
    type: "text",
    text: "Title",
    fontSize: 12,
  }
  const titleShape: Shape = {
    slots: titleSlot,
    data: titleData
  }

  grid.addShape(titleShape)

  const computedGrid = grid.compute()

  return (
    <h1>This site is under construction</h1>
  );
}

