import configCard from '../assets/images/Config_card.png';
import enterBtn from '../assets/images/enter_btn.png';
import '../styles/components/configurationPanel.css';
import { BotConfiguration } from './BotConfiguration';
import { useBots } from '../context/botsContext';

// import configMobile from "../assets/images/config_panels/config_panel_mobile.png"
// import configDesk from "../assets/images/config_panels/config_panel_desk.png"

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({
	navigateToBattlePage,
}: ConfigurationPanelProps) => {
	const { bots } = useBots();

	return (
		<>
			{/* <h2>Configuration Pannel</h2> */}
			<div className="configContainer">
				{/* User enters name only here */}
				<div className="configName">
					<section>
						<img className="config1 configCard" src={configCard} />
						<label htmlFor="nameEnter">enter your bot&apos;s name</label>
						<input id="nameEnter" type="text" required />
						<button onClick={navigateToBattlePage}>
							<img src={enterBtn} />
						</button>
						<p>1</p>
					</section>

					<section>
						<img className="config2 configCard" src={configCard} />
						<label htmlFor="nameEnter">enter your bot&apos;s name</label>
						<input id="nameEnter" type="text" required />
						<button onClick={navigateToBattlePage}>
							<img src={enterBtn}></img>
						</button>
						<p>2</p>
					</section>

					<section>
						<img className="config3 configCard" src={configCard} />
						<label htmlFor="nameEnter">enter your bot&apos;s name</label>
						<input id="nameEnter" type="text" required />
						<button onClick={navigateToBattlePage}>
							<img src={enterBtn}></img>
						</button>
						<p>3</p>
					</section>

					<section>
						<img className="config4 configCard" src={configCard} />
						<label htmlFor="nameEnter">enter your bot&apos;s name</label>
						<input id="nameEnter" type="text" required />
						<button onClick={navigateToBattlePage}>
							<img src={enterBtn}></img>
						</button>
						<p>4</p>
					</section>
				</div>
				{/* Need to move 'navigateToBattlePage' here. Need radio values. 
      <div className="configPanels">
        <img src={configMobile} />
        <img src={configDesk}/>
      </div>*/}
				<div className="botsConfigurationWrapper">
					{bots.map((bot) => (
						<BotConfiguration key={bot.id} bot={bot} />
					))}
				</div>

				<button onClick={navigateToBattlePage}>Battle Page</button>
			</div>
		</>
	);
};
