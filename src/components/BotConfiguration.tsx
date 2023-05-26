import { ChangeEvent, FormEvent, useState } from 'react';
import enterBtn from '../assets/images/enter_btn.png';
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import Bot from '../classes/bot';

interface BotConfigProps {
	bot: Bot;
}

export const BotConfiguration = ({ bot }: BotConfigProps) => {
	const [isNameValid, setIsNameValid] = useState<null | boolean>(null);
	const [isFormVissible, setIsFormVissible] = useState(false);

	const { bots, editBot } = useBots();

	const validateName = (value: string) => {
		const existedNames = bots.map((existingBot) => existingBot.name);
		if (existedNames.includes(value)) {
			setIsNameValid(false);
		} else {
			setIsNameValid(true);
			setIsFormVissible(true);
		}
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		editBot(bot.id, e.target.name, e.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);
		const formJson = Object.fromEntries(formData.entries());
		const botName = formJson.name as string;
		validateName(botName);
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
					<label htmlFor="operator">
						Boolean Operator:
						<select
							name="operator"
							value={bot.operator}
							onChange={handleChange}
						>
							<option value="AND">AND</option>
							<option value="OR">OR</option>
							<option value="NOR">NOR</option>
							<option value="NOT">NOT</option>
						</select>
					</label>
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
					<label htmlFor="direction">
						Starting direction:
						<select
							name="direction"
							value={bot.direction}
							onChange={handleChange}
						>
							<option value="North">North</option>
							<option value="South">South</option>
							<option value="East">East</option>
							<option value="West">West</option>
						</select>
					</label>
				</div>
			)}

			<p>{bot.id}</p>
		</>
	);
};
