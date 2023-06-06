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
	const [isFormVisible, setIsFormVisible] = useState(false);

	const { bots, editBot } = useBots();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		editBot(bot.id, e.target.name, e.target.value);
	};

	const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		editBot(bot.id, 'value', e.target.value);
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
				setIsFormVisible(true);
			}
		}

		editBot(bot.id, 'name', botName);
	};

	return (
		<>
			{isNameValid ? (
				<>
					<div className="name-message">
						<span className="smaller">Welcome,</span>
						{bot.name}!
					</div>
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

			{isFormVisible && (
				<div className="configForm">
					<div className="configInner">
						<div className="value-wrapper">
							<label htmlFor="booleanValue">
								<h4>Boolean Value</h4>
								<div className="radio-container">
									0{' '}
									<input
										type="radio"
										name={`value${bot.id}`}
										value="0"
										onChange={handleRadioChange}
										checked={bot.value == 0}
									/>
									<input
										type="radio"
										name={`value${bot.id}`}
										value="1"
										onChange={handleRadioChange}
										checked={bot.value == 1}
									/>
									1 {/* style for value radios */}
									<span className="slider"></span>
								</div>
							</label>
						</div>
						<div className="operator-wrapper">
							<h4>Boolean Operator</h4>
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
						<div className="speed-wrapper">
							<label htmlFor="speed">
								<h4>Speed:</h4>
								<div className="speed-input">
									{/* numbers for speed input styling */}
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li>
									</ul>
									<input
										type="range"
										name="speed"
										min="1"
										max="5"
										value={bot.speed}
										onChange={handleChange}
									/>
								</div>
							</label>
						</div>
						<div className="direction-wrapper">
							<h4>Direction:</h4>

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
							{/* knob to indicate boolean direction */}
							<div className="direction-knob">
								<div className="knob-ring">
									<div className="knob-inner">
										<div className="knob-line"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<p>{bot.id}</p>
		</>
	);
};
