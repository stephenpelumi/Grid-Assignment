import React from 'react';
import { range } from './utils';

function Grid({ numRows, numCols }) {
  const gridRows = range(numRows).map((rowIndex) => {
    const rowCells = range(numCols).map((colIndex) => (
      <div key={colIndex} className="cell"></div>
    ));

    return (
      <div key={rowIndex} className="row">
        {rowCells}
      </div>
    );
  });

  return (
    <div className="grid">
      {gridRows}
    </div>
  );
}

export default Grid;