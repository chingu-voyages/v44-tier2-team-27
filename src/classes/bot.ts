import { Operator, Direction, BotColor, BotPosition, BotValue, Speed } from '../misc/interfaces';
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
    this.isActive = true;
    this._position = {
      x: getRandomNumber(1, 8),
      y: getRandomNumber(1, 8),
    }
  }

  //get position method
  get position():BotPosition {
    return this._position;
  }

  //get direction method
  get direction():Direction {
    return this._direction;
  }

  //change direction method - if argument is given, will change to that direction, otherwise new direction will be random 
  public changeDirection(value: Direction | null = null): void {
    if(this._direction == value) {
      throw new Error('new direction is the same as current direction');
    }

    const directions:Direction[] = ['North', 'South', 'East', 'West'];
    const filteredDirections = directions.filter((item) => item != value);

    if(value == null) {
      this._direction = shuffleArray(filteredDirections)[0];
    } else this._direction = value;
  }


  //move method - bot will move 1 tile based on the direction it's facing
  public move(): void {
    switch (this._direction) {
      case 'North': {
        this._position = {
          x: this._position.x,
          y: this._position.y + 1,
        };
        break;
      }
      case 'East': {
        this._position = {
          x: this._position.x + 1,
          y: this._position.y,
        };
        break;
      }
      case 'South': {
        this._position = {
          x: this._position.x,
          y: this._position.y - 1,
        };
        break;
      }
      case 'West': {
        this._position = {
          x: this._position.x - 1,
          y: this._position.y,
        };
        break;
      }
    }
  }
}
