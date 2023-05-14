import React from "react";
import Bot from "../classes/bot.ts";
import '../styles/components/bot.css'
interface BotComponentProps {
  bot: Bot;
}

export const BotComponent: React.FC<BotComponentProps> = ({
  bot,
}: BotComponentProps) => {

  return <div className={`${bot.color.toLowerCase()}`} >{bot.name}</div>;
};
