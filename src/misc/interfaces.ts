/* eslint-disable prettier/prettier */
import Bot from '../classes/bot';

// all custom types and interfaces used in the app will be defined and exported from here
export type Operator = 'AND' | 'OR' | 'NOR' | 'NOT';
export type Direction = 'North' | 'South' | 'East' | 'West';
export type BotColor = 'Red' | 'Yellow' | 'Green' | 'Blue';
export type BotValue = 1 | 0;
export type Speed = 1 | 2 | 3 | 4;
export type Modals = 'HowToPlay' | 'BattleLog' | 'BotWinner';

export interface UseBotsProps {
	bots: Bot[];
	battleLog: CollidedBots[];
	botWinner: Bot | null;
	setBotWinner: (winner: Bot | null) => void;
	updateBattleLog: (newLog: CollidedBots[] | null) => void;
	editBot: (
		id: number,
		property: string,
		value: string | Operator | Direction | number | boolean | null
	) => void;
	resetBots: () => void;
}

export interface BotPosition {
	x: number;
	y: number;
}

export interface CollidedBots {
	bot1: Bot;
	bot2: Bot;
	winner: string | undefined;
}

