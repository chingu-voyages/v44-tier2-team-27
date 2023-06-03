import {
	Operator,
	Direction,
	BotColor,
	BotPosition,
	BotValue,
	Speed,
} from '../misc/interfaces';
import { getRandomNumber, shuffleArray } from '../misc/functions';

export default class Bot {
	//readonly properties - assigned to bot at the start of the app
	readonly id: number;

	readonly color: BotColor;

	//public properties
	public name: string;

	public operator: Operator;

	public value: BotValue;

	public speed: Speed;

	public isAlive: boolean;

	public score: number;

	public moves: number;

	public isActive: boolean;

	//private properties - use functions below to access and change as needed
	private _direction: Direction;

	private _position: BotPosition;

	//constructor method - assigns properties to bot instance
	//prettier-ignore
	constructor(id: number, name: string, operator: Operator, value: BotValue, speed: Speed, direction: Direction, color: BotColor) {

    this.id = id;
    this.color = color;
    this.name = name;
    this.operator = operator;
    this.value = value;
    this._direction = direction;
    this.speed = speed;
    this.isAlive = true;
    this.score = 0;
	this.moves = 0;
    this.isActive = true;
    this._position = {
      x: getRandomNumber(1, 8),
      y: getRandomNumber(1, 8),
    }
  }

	//get position method
	get position(): BotPosition {
		return this._position;
	}

	//get direction method
	get direction(): Direction {
		return this._direction;
	}

	//change direction method - if argument is given, will change to that direction, otherwise new direction will be random
	public changeDirection(value: Direction | null = null): void {
		try {
			if (this._direction == value) {
				throw new Error('new direction is the same as current direction');
			}

			const directions: Direction[] = ['North', 'South', 'East', 'West'];
			const filteredDirections: string[] = directions.filter(
				(item) => item != value
			);

			if (value == null) {
				this._direction = shuffleArray(filteredDirections)[0] as Direction;
			} else {
				this._direction = value;
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error.message);
		}
	}

	public move(): void {
		const rows = 9;
		const cols = 9;

		switch (this._direction) {
			case 'North': {
				if (this._position.y === 1) {
					// this._direction = 'South';
					this.changeDirection();
					this._position = {
						x: this._position.x,
						y: (this._position.y + 1) % cols,
					};
				} else {
					this._position = {
						x: this._position.x,
						y: (this._position.y - 1 + cols) % cols,
					};
				}
				break;
			}
			case 'East': {
				if (this._position.x === 8) {
					this.changeDirection();
					// this._direction = 'West';
					this._position = {
						x: (this._position.x - 1 + rows) % rows,
						y: this._position.y,
					};
				} else {
					this._position = {
						x: (this._position.x + 1) % rows,
						y: this._position.y,
					};
				}
				break;
			}
			case 'South': {
				if (this._position.y === 8) {
					this.changeDirection();
					// this._direction = 'North';
					this._position = {
						x: this._position.x,
						y: (this._position.y - 1 + cols) % cols,
					};
				} else {
					this._position = {
						x: this._position.x,
						y: (this._position.y + 1) % cols,
					};
				}
				break;
			}
			case 'West': {
				if (this._position.x === 1) {
					this.changeDirection();
					// this._direction = 'East';
					this._position = {
						x: (this._position.x + 1) % rows,
						y: this._position.y,
					};
				} else {
					this._position = {
						x: (this._position.x - 1 + rows) % rows,
						y: this._position.y,
					};
				}
				break;
			}
		}
	}

	checkForCollisions(bots: Bot[]): void {
		// let isTie: boolean;
		bots.forEach((bot) => {
			if (bot.id !== this.id && bot.isAlive && this.isAlive) {
				if (
					bot.position.x === this.position.x &&
					bot.position.y === this.position.y
				) {
					const result = this.evaluateOperator(bot);

					// If result is true, this bot wins
					if (bot.operator === this.operator && bot.value === this.value) {
						// isTie = true;
						// console.log('Tie');
					} else if (result) {
						bot.isAlive = false;
						this.score++;
						// console.log(`Bot ${this.name} defeated bot ${bot.name}`);
					} else {
						this.isAlive = false;
						bot.score++;
						// console.log(`Bot ${bot.name} defeated bot ${this.name}`);
					}
				}
			}
		});
	}

	// Evaluates the bot values and returns a boolean
	private evaluateOperator(bot: Bot): boolean | number {
		if (this.operator === 'AND') {
			return this.value && bot.value;
		} else if (this.operator === 'OR') {
			return this.value || bot.value;
		} else if (this.operator === 'NOR') {
			return !(this.value || bot.value);
		} else if (this.operator === 'NOT') {
			return !this.value;
		} else return false;
	}
}
