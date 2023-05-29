import { ReactNode, useState, FC } from 'react';
import '../styles/components/board.css';
import Grid from './Grid';
import { BotComponent } from './Bot';
import { useBots } from '../context/botsContext';
import useInterval from '../hooks/useInterval';

const BattlePage: FC = () => {
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
			// console.log(timeElapsed, timeElapsed % bot.speed);
			// if (timeElapsed % 3 === 0) {
			// 	bot.changeDirection();
			// }
			if (timeElapsed % bot.speed === 0) {
				// console.log(bot.name, bot.value, bot.operator);operator
				bot.moves++;
				editBot(bot.id, 'position', null);
				bot.checkForCollisions(bots);

				/* Checks if bots has moved 3 times and changes direction */
				if (bot.moves % 3 === 0) {
					// console.log(bot.moves, bot.name);
					bot.changeDirection();
				}
			}
		});
		if (activeBots.length === 1) {
			setPlay(!play);
		}
	};

	useInterval(updateBotPositions, play ? timeInterval : null);

	const BotDetails: FC = () => {
		// console.log(bots[0].position, bots[0].direction)
		return (
			<div className="bot-details-container">
				{bots.map((bot, i) => (
					<div className="bot-details" key={i}>
						<p className="bot-name">{bot.name}</p>
						<div className="score"></div>
						<div className="score score_alt"></div>
						<div className="details">
							<div className="tooltip">
								Value: {bot.value}
								<span className="tooltiptext">power level of the bot</span>
							</div>
							<div className="tooltip">
								Speed: {bot.speed}
								<span className="tooltiptext">Speed of the bot</span>
							</div>
							<div className="tooltip">
								OP: {bot.operator}{' '}
								<span className="tooltiptext">
									The boolean operator of the bot
								</span>
							</div>
							<div className="tooltip">
								Dir: {bot.direction}{' '}
								<span className="tooltiptext">
									The direction it is going in
								</span>
							</div>
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
				{play ? 'PAUSE' : 'BATTLE'}
			</button>
		</div>
	);
};

export default BattlePage;
