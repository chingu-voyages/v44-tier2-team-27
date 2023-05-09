import React from 'react';
import './Grid.css';

const Grid: React.FC = () => {
  const rows = 8;
  const cols = 8;
  const grid = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(<div key={`${i}-${j}`} className="grid-cell" />);
    }
  }

  return <div className="grid-container">{grid}</div>;
};

export default Grid;