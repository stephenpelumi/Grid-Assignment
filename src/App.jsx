import React from 'react';
import Grid from './Grid'; 
import './index.css'; 


function App() {
  const numRows = 8;
  const numCols = 6;

  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numCols; j++) {
      cells.push(<div className="cell" key={`cell-${i}-${j}`}></div>);
    }
    rows.push(<div className="row" key={`row-${i}`}>{cells}</div>);
  }

  return <div className="grid">{rows}</div>;
}

export default App;