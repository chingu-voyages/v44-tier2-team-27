import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './styles/index.css';
import { BotsContextProvider } from './context/botsContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BotsContextProvider>
      <App />
    </BotsContextProvider>
  </React.StrictMode>
);
