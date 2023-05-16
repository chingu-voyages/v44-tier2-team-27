//all globally used functions will be defined and exported from here

import { Speed, BotValue, Direction, Operator } from './interfaces';

export const getRandomNumber = (min: number, max: number): number => {
	return Math.round(Math.random() * (max - min) + min);
};

export const isOperator = (
	input: string | number | boolean
): input is Operator => {
	return (input as Operator) !== undefined;
};

export const isBotValue = (
	input: string | number | boolean
): input is BotValue => {
	return (input as BotValue) !== undefined;
};

export const isDirection = (
	input: string | number | boolean
): input is Direction => {
	return (input as Direction) !== undefined;
};

export const isSpeed = (input: string | number | boolean): input is Speed => {
	return (input as Speed) !== undefined;
};

export const shuffleArray = (array: []): [] => {
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
