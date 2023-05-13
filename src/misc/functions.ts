//all globally used functions will be defined and exported from here

import {Direction, Operator} from "./interfaces.ts";

export const getRandomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const generateRandomBot = (n: number) =>  {
  const name = `Bot ${Math.floor(Math.random() * n) + 1}`;
  const operator = ['AND', 'OR', 'NOR', 'NOT'][Math.floor(Math.random() * 4)] as Operator;
  const value: 0 | 1 = Math.floor(Math.random() * 2) as 0 | 1;
  const speed: number = Math.floor(Math.random() * 5) + 1; // between 1 and 5
  const direction = ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)] as Direction;
  return { name, operator, value, speed, direction };
}
