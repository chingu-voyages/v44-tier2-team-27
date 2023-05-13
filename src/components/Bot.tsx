import React from "react";
import Bot from "../classes/bot.ts";
interface BotComponentProps {
  bot: Bot;
}

export const BotComponent: React.FC<BotComponentProps> = ({
  bot,
}: BotComponentProps) => {
  return <div>{bot.name}</div>;
};
