import { FC, ReactNode } from 'react';

import '../styles/components/grid.css';
// import BotComponent from '../components/Bot.tsx';
interface GridProps {
	rows: number;
	cols: number;
	botRenderer: (row: number, col: number) => ReactNode;
}

const Grid: FC<GridProps> = ({ rows, cols, botRenderer }: GridProps) => {
	const grid = [];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			grid.push(
				<div key={`${i}-${j}`} id={`${j + 1},${i + 1}`} className="grid-cell">
					{botRenderer(j + 1, i + 1)}
				</div>
			);
		}
	}
	return <div className="grid-container">{grid}</div>;
};

export default Grid;
