import { useEffect, useState } from "react";
import Loader from '../components/Loader';
import configCard from '../assets/images/Config_card.png';
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import { BotConfiguration } from './BotConfiguration';

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({
	navigateToBattlePage,
}: ConfigurationPanelProps) => {
	const { bots } = useBots();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulating a loading time
		const timer = setTimeout(() => {
		  setLoading(false);
		}, 2000);
	
		return () => clearTimeout(timer);
	  }, []);

	return (
		<>
			<div className="configContainer">
			<Loader loading={loading} /> 
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
				<button className="battle_button" onClick={navigateToBattlePage}>battle page</button>
			</div>
		</>
	);
};
