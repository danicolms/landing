import React from 'react';
import Grid, { ColumnSize } from './domain/grid';
import createHeadlineShape from './app';
import ShapeAdapter from './adapter';

export default function App(): JSX.Element {
  const grid = new Grid(ColumnSize.L)

  const headline = createHeadlineShape()
  grid.addShapes([headline])

  const computedGrid = grid.compute()

  const adapter = new ShapeAdapter(computedGrid) 
  const Stage = adapter.toKonvaStage()

  return (
    <Stage />
  );
}

