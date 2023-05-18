/* eslint-disable prettier/prettier */
import App from './app';
import './styles/index.css';
import { BotsContextProvider } from './context/botsContext';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<BotsContextProvider>
		<App />
	</BotsContextProvider>
	// </React.StrictMode>
);
