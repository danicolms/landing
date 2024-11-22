import React, { Fragment } from 'react';
import Grid, { ColumnSize } from './domain/grid';
import createHeadlineShape from './application';
import GridAdapter from './infrastructure/grid-adapter';

export default function Stage(): JSX.Element {
  const grid = new Grid(ColumnSize.L)

  const headline = createHeadlineShape()
  grid.addShapes([headline])

  grid.filterOverflownShapes()

  const gridAdapter = new GridAdapter(grid)
  const konvaStage = gridAdapter.toKonvaStage()

  return (
    <Fragment>{konvaStage}</Fragment>
  );
}

