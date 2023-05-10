/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode, useState } from 'react';
import Bot from '../classes/bot';
import { UseBotsProps, NewBotOptions } from '../misc/interfaces';

const BotsContext = createContext({} as UseBotsProps);

export const useBots = () => useContext(BotsContext);

export const BotsContextProvider = ({ children }: { children: ReactNode }) => {
  const [bots, setBots] = useState<Bot[]>([]);

  //prettier-ignore
  const createNewBot = ({name, operator, value, speed, direction}: NewBotOptions) => {
    const newBot = new Bot(name, operator, value, speed, direction);
    setBots((prevBots) => [newBot, ...prevBots]);
  };

  return (
    <BotsContext.Provider value={{ bots, createNewBot }}>
      {children}
    </BotsContext.Provider>
  );
};
