/* eslint-disable prettier/prettier */
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
		<section key={bot.id}>
			<img className="config4 configCard" src={configCard} />
			<label htmlFor="nameEnter">enter your bot&apos;s name</label>
			<input id="nameEnter" type="text" required />
			<button onClick={navigateToBattlePage}>
				<img src={enterBtn}></img>
			</button>
			<p>{bot.id}</p>
		</section>
	);
};
