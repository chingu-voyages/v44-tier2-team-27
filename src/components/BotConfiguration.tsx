import { ChangeEvent, useState } from 'react';
import '../styles/components/botConfiguration.css';
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
		const existedNames = bots.map((item) => item.name);
		if (existedNames.includes(value)) {
			setIsNameValid(false);
		} else setIsNameValid(true);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		editBot(bot.id, e.target.name, e.target.value);
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		validateName(e.target.value);
		editBot(bot.id, 'name', e.target.value);
		// console.log(bots);
	};

	const handleNext = () => {
		setIsFormVissible(true);
	};

	return (
		<div className="botConfigurationWrapper">
			{isNameValid ? (
				<>
					<p>Welcome, {bot.name}</p>
				</>
			) : (
				<h2>Choose Your Bot&apos;s Name</h2>
			)}
			<div>
				<label htmlFor="name">Bot name:</label>
				<input
					id="name"
					name="name"
					type="text"
					value={bot.name}
					onChange={handleNameChange}
				/>
			</div>

			{isNameValid === false && (
				<>
					<p>Sorry, that name is in use. Try again</p>
				</>
			)}

			{isFormVissible && (
				<>
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
					<br />
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
				</>
			)}
			<button onClick={handleNext}>next</button>
		</div>
	);
};
