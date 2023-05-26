import { ChangeEvent, FormEvent, useState } from 'react';
import enterBtn from '../assets/images/enter_btn.png';
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import Bot from '../classes/bot';
import { directionArray, operatorArray } from '../misc/constants';
import { validateName } from '../misc/functions';

interface BotConfigProps {
	bot: Bot;
}

export const BotConfiguration = ({ bot }: BotConfigProps) => {
	const [isNameValid, setIsNameValid] = useState<null | boolean>(null);
	const [isFormVissible, setIsFormVissible] = useState(false);

	const { bots, editBot } = useBots();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		editBot(bot.id, e.target.name, e.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);
		const formJson = Object.fromEntries(formData.entries());
		const botName = formJson.name as string;

		if (validateName(botName, bots)) {
			setIsNameValid(false);
		} else {
			{
				setIsNameValid(true);
				setIsFormVissible(true);
			}
		}

		editBot(bot.id, 'name', botName);
	};

	return (
		<>
			{isNameValid ? (
				<>
					<div className="name-message">Welcome, {bot.name}!</div>
				</>
			) : (
				<form onSubmit={handleSubmit} className="nameForm">
					<label htmlFor="name">enter your bot&apos;s name</label>
					<input
						id="name"
						name="name"
						type="text"
						defaultValue={bot.name}
						required
					/>
					<button type="submit">
						<img alt="" src={enterBtn}></img>
					</button>
				</form>
			)}

			{isNameValid === false && (
				<>
					<div className="name-message">
						Sorry, that name is in use. Try again!
					</div>
				</>
			)}

			{isFormVissible && (
				<div className="configForm">
					<label htmlFor="booleanValue">
						Boolean Value 0{' '}
						<input
							type="radio"
							name="value"
							value="0"
							onChange={handleChange}
						/>
						1{' '}
						<input
							type="radio"
							name="value"
							value="1"
							onChange={handleChange}
						/>
					</label>

					<div className="operator-wrapper">
						Boolean Operator:
						{operatorArray.map((operator) => (
							<button
								key={operator}
								id={operator}
								onClick={(event) =>
									editBot(
										bot.id,
										'operator',
										(event.target as HTMLButtonElement).id
									)
								}
								className={
									operator === bot.operator
										? 'operator-active'
										: 'operator-inactive'
								}
							>
								{operator}
							</button>
						))}
					</div>
					<label htmlFor="speed">
						Speed:
						<input
							type="range"
							name="speed"
							min="1"
							max="5"
							value={bot.speed}
							onChange={handleChange}
						/>
					</label>
					<div className="direction-wrapper">
						Direction:
						{directionArray.map((direction) => (
							<button
								key={direction}
								id={direction}
								onClick={(event) =>
									editBot(
										bot.id,
										'direction',
										(event.target as HTMLButtonElement).id
									)
								}
								className={
									direction === bot.direction
										? 'direction-active'
										: 'direction-inactive'
								}
							>
								{direction}
							</button>
						))}
					</div>
				</div>
			)}

			<p>{bot.id}</p>
		</>
	);
};
