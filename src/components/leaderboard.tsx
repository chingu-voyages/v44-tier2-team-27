/* eslint-disable prettier/prettier */
import { FC, useEffect, useState } from 'react';
import Bot from '../classes/bot';
import { useBots } from '../context/botsContext';
import '../styles/components/leaderboard.css';
import { getColor } from '../misc/functions';
interface LeaderboardEntry {
	name: string;
	score: number;
}

type LeaderboardProps = {
	Board: LeaderboardEntry[];
};

const Leaderboard: FC<LeaderboardProps> = () => {
	const { bots, battleLog } = useBots();
	const [sortedBots, setSortedBots] = useState<Bot[]>([])
	useEffect(() => {
		setSortedBots(bots.sort((a, b) => b.score - a.score))
	},[battleLog])
	return (
		<>
			<h2 className="board-heading">Leaderboard</h2>
			<table>
				<thead>
					<tr>
						<th>Position</th>
						<th>Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					
				
				{sortedBots.map((bot: Bot, index: number) => (
					<tr key={bot.id}>
						<td>{index + 1}</td>
						<td style={{ backgroundColor: getColor(bot) }}>{bot.name}</td>
						<td>{bot.score}</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
	);
};

export default Leaderboard;
