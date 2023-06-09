/* eslint-disable prettier/prettier */
import { useState } from 'react';
import BattlePage from './components/BattlePage';
import  WelcomePage  from './components/WelcomePage';
import ConfigurationPanel from './components/ConfigurationPanel';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/components/layout.css';
import { CollidedBots, Modals } from './misc/interfaces';

function App() {
	const [mainComponent, setMainComponent] = useState('welcomePage');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [displayedModal, setDisplayedModal] = useState<Modals>('HowToPlay');
	const [collidedBots, setCollidedBots] = useState<CollidedBots[]>([]);

	const navigateToConfigurationPanel = () => {
		setMainComponent('configurationPanel');
	};

	const navigateToBattlePage = () => {
		setMainComponent('battlePage');
	};

	return (
		<div className="layoutWrapper">
			<Header />
				{mainComponent === 'welcomePage' && (
					<WelcomePage
						navigateToConfigurationPanel={navigateToConfigurationPanel}
					/>
				)}
				{mainComponent === 'configurationPanel' && (
					<ConfigurationPanel navigateToBattlePage={navigateToBattlePage} />
				)}
				{mainComponent === 'battlePage' && <BattlePage 
														navigateToConfigurationPanel={navigateToConfigurationPanel} 
														setDisplayedModal={setDisplayedModal} 
														setIsModalOpen={setIsModalOpen}
														setCollidedBots={setCollidedBots}
													/>}
				<Footer 
					isModalOpen={isModalOpen} 
					setIsModalOpen={setIsModalOpen} 
					displayedModal={displayedModal} 
					setDisplayedModal={setDisplayedModal} 
					collidedBots={collidedBots}
					setCollidedBots={setCollidedBots}
				/>
		</div>
	);
}

export default App;
