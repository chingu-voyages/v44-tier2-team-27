import React from 'react';
import '../styles/components/grid.css';

const Grid: React.FC = () => {
  const rows = 8;
  const cols = 8;
  const grid = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(<div key={`${i}-${j}`} id={`${rows + 1},${cols + 1}`} className="grid-cell" />);
    }
  }

  return <div className="grid-container">{grid}</div>;
};

export default Grid;