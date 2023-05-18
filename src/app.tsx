/* eslint-disable prettier/prettier */
import { useState } from 'react';
import BattlePage from './components/BattlePage';
import { WelcomePage } from './components/WelcomePage';
import { Layout } from './components/layout/Layout';
import { ConfigurationPanel } from './components/ConfigurationPanel';

function App() {
	const [mainComponent, setMainComponent] = useState('welcomePage');

	const navigateToConfigurationPanel = () => {
		setMainComponent('configurationPanel');
	};

	const navigateToBattlePage = () => {
		setMainComponent('battlePage');
	};

	return (
		<>
			<Layout>
				{mainComponent === 'welcomePage' && (
					<WelcomePage
						navigateToConfigurationPanel={navigateToConfigurationPanel}
					/>
				)}
				{mainComponent === 'configurationPanel' && (
					<ConfigurationPanel navigateToBattlePage={navigateToBattlePage} />
				)}
				{mainComponent === 'battlePage' && <BattlePage />}
			</Layout>
		</>
	);
}

export default App;
