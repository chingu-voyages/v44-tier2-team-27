/* eslint-disable prettier/prettier */
import configCard from '../assets/images/Config_card.png';
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import { BotConfiguration } from './BotConfiguration';
import {useState, useEffect, useRef} from 'react';

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({
	navigateToBattlePage,
}: ConfigurationPanelProps) => {
	const { bots } = useBots();
	const [readyToBattle, setReadyToBattle] = useState<boolean>(true);
	const battleButton = useRef<HTMLButtonElement>(null)

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
			<div className="configContainer">
				<div className="configName">
					{bots.map((bot) => {
						return (
							<section key={bot.id}>
								<img className="config4 configCard" src={configCard} alt="" />
								<BotConfiguration bot={bot} key={bot.id} />
							</section>
						);
					})}
				</div>
				<button ref={battleButton} className="battle_button" onClick={navigateToBattlePage}>battle page</button>
				{!readyToBattle ? <p>You need at least 2 bots to do battle</p> : null}
			</div>
		</>
	);
};
