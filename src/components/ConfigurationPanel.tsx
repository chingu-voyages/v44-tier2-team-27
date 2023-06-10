/* eslint-disable prettier/prettier */
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import { BotConfiguration } from './BotConfiguration';
import {useState, useEffect, useRef} from 'react';
import { getColor } from '../misc/functions';

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

const ConfigurationPanel = ({
	navigateToBattlePage,
}: ConfigurationPanelProps) => {
	const { bots } = useBots();
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
					{bots.map((bot) => {
					const assignedColor = getColor(bot);

						return (
							<section key={bot.id}>
            				<div className="assigned-color" style={{ backgroundColor: assignedColor }} />
								<BotConfiguration bot={bot} key={bot.id} />
							</section>
						);
					})}
				</div>
				<div>
					<button ref={battleButton} className="battle-page-btn battle-button" onClick={navigateToBattlePage}>battle page</button>
					{!readyToBattle ? <p className='not-enough-bots'>You need at least 2 bots to do battle</p> : null}
				</div>
				
			
		</>
	);
};

export default ConfigurationPanel;
