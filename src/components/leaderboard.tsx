import { FC } from 'react';
import Bot from '../classes/bot';
import { useBots } from '../context/botsContext';
import '../styles/components/leaderboard.css';
interface LeaderboardEntry {
	name: string;
	score: number;
}

type LeaderboardProps = {
	Board: LeaderboardEntry[];
};

const Leaderboard: FC<LeaderboardProps> = () => {
	const { bots } = useBots();
	return (
		<div>
			<h2 className="board-heading">Leaderboard</h2>
			<ol>
				{bots.map((bot: Bot, index: number) => (
					<li key={index}>
						<span className="name">{bot.name}</span>
						<span className="score">{bot.score}</span>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Leaderboard;
