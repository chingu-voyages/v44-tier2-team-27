/* eslint-disable prettier/prettier */
import { useState } from 'react';
import BattlePage from './components/BattlePage';
import  WelcomePage  from './components/WelcomePage';
import ConfigurationPanel from './components/ConfigurationPanel';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/components/layout.css';
import { Modals } from './misc/interfaces';

function App() {
	const [mainComponent, setMainComponent] = useState('welcomePage');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [displayedModal, setDisplayedModal] = useState<Modals>('HowToPlay');

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
														isModalOpen={isModalOpen}
														setIsModalOpen={setIsModalOpen}
													/>}
				<Footer 
					isModalOpen={isModalOpen} 
					setIsModalOpen={setIsModalOpen} 
					displayedModal={displayedModal} 
					setDisplayedModal={setDisplayedModal} 
				/>
		</div>
	);
}

export default App;
