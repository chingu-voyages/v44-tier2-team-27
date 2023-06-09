/* eslint-disable prettier/prettier */

import { CollidedBots } from "../../misc/interfaces";

interface BotCollisionProps {
    collidedBots:CollidedBots[];
}

const BotCollision = ({collidedBots}:BotCollisionProps) => {
    return (
        <>
        <h2>Bot Collision</h2>
        {
            collidedBots.map((collision, i) => 
            <div key={i}>
                <p>Bot 1: {collision.bot1!.name}</p>
                <p>Bot 2: {collision.bot2!.name}</p>
            </div>
            )
        }

        
    </>
    )
}

export default BotCollision;