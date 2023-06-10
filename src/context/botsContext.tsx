/* eslint-disable prettier/prettier */
import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from 'react';
import Bot from '../classes/bot';
import { UseBotsProps, Operator, Direction, CollidedBots } from '../misc/interfaces';
import {
	isBotValue,
	isDirection,
	isOperator,
	isSpeed,
} from '../misc/functions';

const BotsContext = createContext({} as UseBotsProps);

export const useBots = () => useContext(BotsContext);

export const BotsContextProvider = ({ children }: { children: ReactNode }) => {
	const [bots, setBots] = useState<Bot[]>([]);
	const [battleLog, setBattleLog] = useState<CollidedBots[]>([])
	const [botWinner, setBotWinner] = useState<Bot | null>(null)

	useEffect(() => {
		setBots([
			new Bot(1, 'bot#1', 'AND', 1, 1, 'North', 'Red', true),
			new Bot(2, 'bot#2', 'OR', 0, 1, 'South', 'Blue', true),
			new Bot(3, 'bot#3', 'NOR', 1, 1, 'East', 'Green', false),
			new Bot(4, 'bot#4', 'NOT', 0, 1, 'West', 'Yellow', false),
		]);
	}, []);

	const resetBots = () => {
		setBots((prevBots) => {
			return prevBots.map((bot) => {
				bot.isAlive = true
				bot.setNewPosition()
				return bot
			})
		})
	}

	const editBot = (
		id: number,
		property: string,
		value: string | Operator | Direction | number | boolean | null
	) => {
		setBots((prevBots) => {
			return prevBots.map((bot) => {
				if (bot.id == id) {
					switch (property) {
						case 'name':
							if (typeof value != 'string') {
								throw new Error('name property must be a string');
							}
							bot.name = value;
							break;
						case 'operator':
							if (!isOperator(value)) {
								throw new Error(
									'operator property must be of type Operator (see interfaces.ts)'
								);
							}
							bot.operator = value;
							break;
						case 'value':
							if (!isBotValue(value)) {
								throw new Error(
									'value property must be a number, either 1 or 0 '
								);
							}
							bot.value = value;
							break;
						case 'direction':
							if (!isDirection(value)) {
								throw new Error(
									'direction property must be of type Direction (see interfaces.ts)'
								);
							}
							bot.changeDirection(value);
							break;
						case 'speed':
							if (!isSpeed(value)) {
								throw new Error(
									'speed property must be a number, either 1, 2 , 3 or 4'
								);
							}
							bot.speed = value;
							break;
						case 'isAlive':
							if (typeof value != 'boolean') {
								throw new Error('isAlive property must be a boolean');
							}
							bot.isAlive = value;
							break;
						case 'score':
							if (typeof value != 'number') {
								throw new Error('score property must be a number');
							}
							bot.score = value;
							break;
						case 'isActive':
							if (typeof value != 'boolean') {
								throw new Error('isActive property must be a boolean');
							}
							bot.isActive = value;
							break;
						case 'position':
							bot.move();
							break;
						default:
							break;
					}
					return bot;
				} else return bot;
			});
		});
	};

	const updateBattleLog = (newLog: CollidedBots[] | null = null) => {
		if(newLog == null) {
			setBattleLog([])
		} else {
			let newUpdatedLog:CollidedBots[] = []
			setBattleLog((prevLog) => {
				const updatedLog = [newLog, ...prevLog].flat();
				updatedLog.forEach((log) => {
					const checkBot1 = log.bot1
					const checkBot2 = log.bot2
					newUpdatedLog = updatedLog.filter((item) => {
						return !(item.bot1 == checkBot2 && item.bot2 == checkBot1) 
					})
				})
				if(newUpdatedLog[0]) {
					if(newUpdatedLog[0].winner == 'bot1') {
						const newScore = newUpdatedLog[0].bot1.score + 1
						editBot(newUpdatedLog[0].bot1.id, 'score', newScore)
					} else if(updatedLog[0].winner == 'bot2') {
						const newScore = newUpdatedLog[0].bot1.score + 1
						editBot(newUpdatedLog[0].bot2.id, 'score', newScore)
					}
				}
				return newUpdatedLog
			})		
		}
	}

	return (
		<BotsContext.Provider value={{ bots, editBot, battleLog, updateBattleLog, botWinner, setBotWinner, resetBots }}>
			{children}
		</BotsContext.Provider>
	);
};
