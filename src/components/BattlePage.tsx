import { ReactNode, useState, FC, useEffect } from 'react';
import '../styles/components/board.css';
import Grid from './Grid';
import { BotComponent } from './Bot';
import { useBots } from '../context/botsContext';
import useInterval from '../hooks/useInterval';

const BattlePage: FC = () => {
	const { bots, editBot } = useBots();
	const [play, setPlay] = useState(false);
	const [timeElapsed, setTimeElapsed] = useState<number>(0);
	const activeBots = bots.filter((bot) => bot.isAlive);

	const handlePlay = () => {
		setPlay(!play);
	};

	useEffect(() => {
		if (activeBots.length === 1) {
			setPlay(false);
		}
	}, [activeBots]);

	const getColor = (index: number): string => {
		const colors = ['rgb(255, 0, 0, .7)', 'rgb(255, 255, 0, .75)', 'rgb(0, 128, 0, .75)', 'rgb(0, 0, 255, .65)'];
		return colors[index % colors.length];
	  };

	const botRenderer = (row: number, col: number): ReactNode => {
		return activeBots.map((bot, index) => {
			bot.checkForCollisions(bots);
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
			if (timeElapsed % bot.speed === 0) {
				bot.checkForCollisions(bots);
				bot.moves++;
				editBot(bot.id, 'position', null);
				if (bot.moves % 3 === 0) {
					bot.moveToClosestBot(bots);
				}
			}
		});
	};

	useInterval(updateBotPositions, play ? 1000 : null);

	const BotDetails: FC = () => {
		return (
			<div className="bot-details-container">
				{bots.map((bot, i) => (
					<div className="bot-details"
					key={i}>
						<p className="bot-name">{bot.name}</p>
						<div className="score" style={{ backgroundColor: getColor(i) }}></div>
						<div className="details">
							<div className="tooltip">
								<p className="dark">Value:</p>
								<p className="light">{bot.value}</p>
								<span className="tooltiptext">power level of the bot</span>
							</div>
							<div className="tooltip">
								<p className="dark">Speed:</p>
								<p className="light">{bot.speed}</p>
								<span className="tooltiptext">Speed of the bot</span>
							</div>
							<div className="tooltip">
								<p className="dark">OP:</p>
								<p className="light">{bot.operator}</p>
								<span className="tooltiptext">
									The boolean operator of the bot
								</span>
							</div>
							<div className="tooltip">
								<p className="dark">Dir:</p>
								<p className="light">{bot.direction}</p>
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
			<div className="board-wrapper">
				<h2 className="board-heading">LeaderBoard</h2>
				<BotDetails />
				<Grid rows={8} cols={8} botRenderer={botRenderer} />
				<button type="button" onClick={handlePlay} className="battle-button">
					{play ? 'PAUSE' : 'BATTLE'}
				</button>
			</div>
		</div>
	);
};

export default BattlePage;
