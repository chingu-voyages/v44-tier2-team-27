import React from 'react';
import '../styles/components/grid.css';
import '../components/Bot.tsx'
interface GridProps {
  rows: number;
  cols: number;
  botRenderer: (row: number, col: number) => React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ rows, cols, botRenderer }: GridProps) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(
          <div key={`${i}-${j}`} id={`${i + 1},${j + 1}`} className="grid-cell">
            {botRenderer(i, j)}
          </div>
      );
    }
  }

  return <div className="grid-container">{grid}</div>;
};

export default Grid;
