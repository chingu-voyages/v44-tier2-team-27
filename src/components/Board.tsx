import React from "react";
import '../styles/components/board.css'
import Grid from "./Grid"
import Bots from "../classes/bots"

const Board: React.FC = () => {
    const botsArray: Bots[] = [];

    for(let i = 0; i < 4; i++) {
        const bot = new Bots(`Bot ${i+1}`, "AND", 0, 5, "North");
        botsArray.push(bot);
    }
    const BotDetails: React.FC = () => {
        return (
            <div className='bot-details-container'>
                {botsArray.map((bot, i) => (
                    <div className='bot-details' key={i}>
                        <p className='bot-name'>{bot.name}</p>
                        <div className='score'>
                        </div>
                        <div className='score score_alt'>
                        </div>
                        <div className='details'>
                            <p>Value: {bot.value}</p>
                            <p>Speed: {bot.speed}</p>
                            <p>OP: {bot.operator}</p>
                            <p>Dir: {bot.direction}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className='board-container'>
            <h1 className='board-heading'>LeaderBoard</h1>
        <BotDetails />
        <Grid />
        </div>
    )
}



export default Board
