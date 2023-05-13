import React from "react";
import "../styles/components/board.css";
import Grid from "./Grid";
import { BotComponent } from "./Bot.tsx";
import { useBots } from "../context/botsContext.tsx";

const BattlePage: React.FC = () => {
  const { bots } = useBots();
  console.log(bots);
  const BotDetails: React.FC = () => {
    return (
      <div className="bot-details-container">
        {bots.map((bot, i) => (
          <div className="bot-details" key={i}>
            <p className="bot-name">{bot.name}</p>
            <div className="score"></div>
            <div className="score score_alt"></div>
            <div className="details">
              <p>Value: {bot.value}</p>
              <p>Speed: {bot.speed}</p>
              <p>OP: {bot.operator}</p>
              <p>Dir: {bot.direction}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="board-container">
      <h1 className="board-heading">LeaderBoard</h1>
      <BotDetails />
      <Grid
        rows={8}
        cols={8}
        botRenderer={(row, col) => {
          const bot = bots.find(
            (bot) => bot.position.x === row && bot.position.y === col
          );
          if (bot) {
            return <BotComponent bot={bot} />;
          } else {
            return null;
          }
        }}
      />
      <button type="button" className="battle-button">
        BATTLE
      </button>
    </div>
  );
};

export default BattlePage;
