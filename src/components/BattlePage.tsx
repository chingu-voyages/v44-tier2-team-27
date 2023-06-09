/* eslint-disable prettier/prettier */
import { ReactNode, useState, FC, useEffect } from 'react';
import '../styles/components/board.css';
import Grid from './Grid';
import { BotComponent } from './Bot';
import { useBots } from '../context/botsContext';
import useInterval from '../hooks/useInterval';
import { Modals, CollidedBots } from '../misc/interfaces';

interface BattlePageProps {
	navigateToConfigurationPanel:() => void;
	setDisplayedModal:(modal:Modals) => void;
	setIsModalOpen:(value:boolean) => void;
	setCollidedBots:(bots: CollidedBots[]) => void;
}

const BattlePage = ({navigateToConfigurationPanel, setDisplayedModal, setIsModalOpen, setCollidedBots}:BattlePageProps) => {
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

	const botRenderer = (row: number, col: number): ReactNode => {
		return activeBots.filter((bot) => bot.isActive).map((bot) => {
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
				if(bot.checkForCollisions(bots).length > 0){
					console.log(bot.checkForCollisions(bots))
					handlePlay();
					setIsModalOpen(true);
					setDisplayedModal('BotCollision');
					setCollidedBots(bot.checkForCollisions(bots))
				}
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
				{bots.filter((bot) => bot.isActive).map((bot, i) => (
					<div className="bot-details" key={i}>
						<p className="bot-name">{bot.name}</p>
						<div className="score"></div>
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

	const goToConfig = () => {
		handlePlay();
		navigateToConfigurationPanel();
	}
	return (
		<div className="board-container">
			<div className="board-wrapper">
				<h2 className="board-heading">LeaderBoard</h2>
				<BotDetails />
				<Grid rows={8} cols={8} botRenderer={botRenderer} />
				<div className='buttons-container'>
					<button type="button" onClick={goToConfig} className="battle-button">
						Configure Bots
					</button>
					<button type="button" onClick={handlePlay} className="battle-button">
						{play ? 'PAUSE' : 'BATTLE'}
					</button>
				</div>
				
			</div>
		</div>
	);
};

export default BattlePage;
