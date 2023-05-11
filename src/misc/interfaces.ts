import Bot from '../classes/bot';

// all custom types and interfaces used in the app will be defined and exported from here
export type Operator = 'AND' | 'OR' | 'NOR' | 'NOT';
export type Direction = 'North' | 'South' | 'East' | 'West';

export interface NewBotOptions {
  name: string;
  operator: Operator;
  value: 1 | 0;
  speed: number;
  direction: Direction;
}
export interface UseBotsProps {
  bots: Bot[];
  createNewBot: (options: NewBotOptions) => void;
}
