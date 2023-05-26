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
				<button onClick={navigateToBattlePage}>Battle Page</button>
			</div>
		</>
	);
};
