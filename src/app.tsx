import { useState, useEffect } from 'react';
import BattlePage from './components/BattlePage';
import { WelcomePage } from './components/WelcomePage';
import { Layout } from './components/layout/Layout';
import { ConfigurationPanel } from './components/ConfigurationPanel';
// loader component
import Loader from './components/Loader';

function App() {
	const [mainComponent, setMainComponent] = useState('welcomePage');
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

	return (
		<>
			{(isLoadingWelcome || isLoadingConfig || isLoadingBattle) && (
				<Loader loading />
			)}
			{!isLoadingWelcome && mainComponent === 'welcomePage' && (
				<Layout>
					<WelcomePage
						navigateToConfigurationPanel={navigateToConfigurationPanel}
					/>
				</Layout>
			)}
			{!isLoadingConfig && mainComponent === 'configurationPanel' && (
				<Layout>
					<ConfigurationPanel navigateToBattlePage={navigateToBattlePage} />
				</Layout>
			)}
			{!isLoadingBattle && mainComponent === 'battlePage' && (
				<Layout>
					<BattlePage />
				</Layout>
			)}
		</>
	);
}

export default App;
