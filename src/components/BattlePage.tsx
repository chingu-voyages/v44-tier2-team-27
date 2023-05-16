import React, { ReactNode, useState } from 'react';
import '../styles/components/board.css';
import Grid from './Grid';
import { BotComponent } from './Bot.tsx';
import { useBots } from '../context/botsContext.tsx';
import useInterval from '../hooks/useInterval.ts';

const BattlePage: React.FC = () => {
	const { bots, editBot } = useBots();
	const [play, setPlay] = useState(false);
	const [timeElapsed, setTimeElapsed] = useState<number>(0);
	const maxSpeed = Math.max(
		...bots.filter((bot) => bot.isAlive).map((bot) => bot.speed)
	);
	const activeBots = bots.filter((bot) => bot.isAlive);
	const timeInterval = 1000 / (maxSpeed / 4);

	const handlePlay = () => {
		setPlay(!play);
	};
	const botRenderer = (row: number, col: number): ReactNode => {
		return bots.map((bot) => {
			if (bot.isAlive && bot.position.x === col && bot.position.y === row) {
				return <BotComponent key={bot.id} bot={bot} />;
			} else {
				return null;
			}
		});
	};
	const updateBotPositions = () => {
		setTimeElapsed((prev) => prev + 1);
		activeBots.forEach((bot) => {
			console.log(timeElapsed, timeElapsed % bot.speed);
			if (timeElapsed % bot.speed === 0) {
				editBot(bot.id, 'position', null);
			}
		});
	};

	useInterval(updateBotPositions, play ? timeInterval : null);

	const BotDetails: React.FC = () => {
		// console.log(bots[0].position, bots[0].direction)
		return (
			<div className="bot-details-container">
				{bots.map((bot, i) => (
					<div className="bot-details" key={i}>
						<p className="bot-name">{bot.name}</p>
						<div className="score"></div>
						<div className="score score_alt"></div>
						<div className="details">
							<p>Value: {bot.value}</p>
							<p>Speed: {bot.speed}</p>
							<p>OP: {bot.operator}</p>
							<p>Dir: {bot.direction}</p>
						</div>
					</div>
				))}
			</div>
		);
	};
	return (
		<div className="board-container">
			<h1 className="board-heading">LeaderBoard</h1>
			<BotDetails />
			<Grid rows={8} cols={8} botRenderer={botRenderer} />
			<button type="button" onClick={handlePlay} className="battle-button">
				BATTLE
			</button>
		</div>
	);
};

export default BattlePage;
