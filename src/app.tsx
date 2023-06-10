/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import BattlePage from './components/BattlePage';
import  WelcomePage  from './components/WelcomePage';
import ConfigurationPanel from './components/ConfigurationPanel';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/components/layout.css';
import { Modals } from './misc/interfaces';
// loader component
import Loader from './components/Loader';

function App() {
	const [mainComponent, setMainComponent] = useState('welcomePage');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [displayedModal, setDisplayedModal] = useState<Modals>('HowToPlay');
	const [isLoadingWelcome, setIsLoadingWelcome] = useState(true);
	const [isLoadingConfig, setIsLoadingConfig] = useState(false);
	const [isLoadingBattle, setIsLoadingBattle] = useState(false);
	const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);
	const [minLoadingDuration] = useState(2000);

	const navigateToConfigurationPanel = () => {
		setMainComponent('configurationPanel');
		setIsLoadingConfig(true);
		setLoadingStartTime(Date.now());
	};

	const navigateToBattlePage = () => {
		setMainComponent('battlePage');
		setIsLoadingBattle(true);
		setLoadingStartTime(Date.now());
	};

	useEffect(() => {
		// simulate load time
		const timeout = setTimeout(() => {
			setIsLoadingWelcome(false);
			setIsLoadingConfig(false);
			setIsLoadingBattle(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [mainComponent]);

	useEffect(() => {
		if (loadingStartTime !== null) {
			// Calculate the elapsed time since loading started
			const elapsedTime = Date.now() - loadingStartTime;
			if (elapsedTime >= minLoadingDuration) {
				// If the minimum duration has passed, clear the loading start time
				setLoadingStartTime(null);
			}
		}
	}, [loadingStartTime, minLoadingDuration]);
	if (isLoadingBattle || isLoadingConfig || isLoadingWelcome) return <Loader loading />

	return (
		<div className="layoutWrapper">
			<Header />
				{!isLoadingWelcome && mainComponent === 'welcomePage' && (
					<WelcomePage
						navigateToConfigurationPanel={navigateToConfigurationPanel}
					/>
			)}
			{!isLoadingConfig && mainComponent === 'configurationPanel' && (
					<ConfigurationPanel navigateToBattlePage={navigateToBattlePage} />
				)}
				{!isLoadingBattle && mainComponent === 'battlePage' && <BattlePage 
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
