import { nanoid } from 'nanoid';
import { Operator, Direction } from '../misc/interfaces';
import { getRandomNumber } from '../misc/functions';

export default class Bot {
  //public properties
  id: string;
  name: string;
  operator: Operator;
  value: 1 | 0;
  speed: number;
  direction: Direction;
  isAlive: boolean;
  score: number;
  position: {
    x: number;
    y: number;
  };

  //constructor method - assigns properties to bot instance
  //prettier-ignore
  constructor(name: string, operator: Operator, value: 1 | 0, speed: number, direction: Direction) {
    this.id = nanoid();
    this.name = name;
    this.operator = operator;
    this.value = value;
    this.speed = speed;
    this.direction = direction;
    this.isAlive = true;
    this.score = 0;
    this.position = {
      x: getRandomNumber(1, 8),
      y: getRandomNumber(1, 8),
    }
  }

  //move method. bot will move 1 tile based on the direction it's facing
  move(): void {
    switch (this.direction) {
      case 'North': {
        this.position = {
          x: this.position.x,
          y: this.position.y + 1,
        };
        break;
      }
      case 'East': {
        this.position = {
          x: this.position.x + 1,
          y: this.position.y,
        };
        break;
      }
      case 'South': {
        this.position = {
          x: this.position.x,
          y: this.position.y - 1,
        };
        break;
      }
      case 'West': {
        this.position = {
          x: this.position.x - 1,
          y: this.position.y,
        };
        break;
      }
    }
  }
}
