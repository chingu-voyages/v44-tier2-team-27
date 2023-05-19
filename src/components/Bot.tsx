import { FC } from 'react';
import Bot from '../classes/bot';
import '../styles/components/bot.css';
interface BotComponentProps {
	bot: Bot;
}

export const BotComponent: FC<BotComponentProps> = ({
	bot,
}: BotComponentProps) => {
	return <div className={`${bot.color.toLowerCase()}`}>{bot.name}</div>;
};
