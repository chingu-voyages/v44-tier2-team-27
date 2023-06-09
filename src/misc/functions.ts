//all globally used functions will be defined and exported from here
/* eslint-disable prettier/prettier */
import Bot from '../classes/bot';
import { Speed, BotValue, Direction, Operator } from './interfaces';

export const getRandomNumber = (min: number, max: number): number => {
	let ranNum = Math.round(Math.random() * (max - min) + min);
	if (ranNum < min) {
		ranNum = min;
	}
	if (ranNum > max) {
		ranNum = max;
	}
	return ranNum;
};

export const isOperator = (
	input: string | number | boolean | null
): input is Operator => {
	return (input as Operator) !== undefined;
};

export const isBotValue = (
	input: string | number | boolean | null
): input is BotValue => {
	return (input as BotValue) !== undefined;
};

export const isDirection = (
	input: string | number | boolean | null
): input is Direction => {
	return (input as Direction) !== undefined;
};

export const isSpeed = (
	input: string | number | boolean | null
): input is Speed => {
	return (input as Speed) !== undefined;
};

export const shuffleArray = (array: string[]): string[] => {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};

export const validateName = (botId: number, botName: string, botsArray: Bot[]) => {
	const existedNames = botsArray.filter((bot) => bot.id != botId).map((bot) => bot.name);
	return existedNames.includes(botName);
};
