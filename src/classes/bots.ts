import { nanoid } from 'nanoid';
import { Operator, Direction } from '../misc/interfaces';

export default class Bots {
  //public properties
  id: string;
  name: string;
  operator: Operator;
  value: 1 | 0;
  speed: number;
  direction: Direction;
  isAlive: boolean;
  score: number;

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
  }
}
