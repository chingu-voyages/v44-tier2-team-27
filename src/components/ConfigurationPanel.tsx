/* eslint-disable prettier/prettier */
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import { BotConfiguration } from './BotConfiguration';
import {useState, useEffect, useRef} from 'react';

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

const ConfigurationPanel = ({
	navigateToBattlePage,
}: ConfigurationPanelProps) => {
	const { bots } = useBots();
	const getColor = (index: number): string => {
		const colors = ['rgb(255, 0, 0, .7)', 'rgb(255, 255, 0, .9)', 'rgb(0, 128, 0, .8)', 'rgb(0, 0, 255, .7)'];
		return colors[index % colors.length];
	  };
	const [readyToBattle, setReadyToBattle] = useState<boolean>(true);
	const battleButton = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const readyBots = bots.filter((bot) => bot.isActive)
		if(readyBots.length < 2) {
			setReadyToBattle(false);
			if(battleButton.current) {
				battleButton.current.disabled = true
			}
		} else {
			setReadyToBattle(true);
			if(battleButton.current) {
				battleButton.current.disabled = false
			}
		}
	}, [bots])

	return (
		<>
				<div className="config-panel-container">
					{bots.map((bot, index) => {
					const assignedColor = getColor(index);

						return (
							<section key={bot.id}>
            				<div className="assigned-color" style={{ backgroundColor: assignedColor }} />
								{/* <img className="config4 configCard" src={configCard} alt="" /> */}
								<BotConfiguration bot={bot} key={bot.id} />
							</section>
						);
					})}
				</div>
				<button ref={battleButton} className="battle-page-btn battle-button" onClick={navigateToBattlePage}>battle page</button>
				{!readyToBattle ? <p>You need at least 2 bots to do battle</p> : null}
			
		</>
	);
};

export default ConfigurationPanel;
