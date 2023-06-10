/* eslint-disable prettier/prettier */
const HowToPlay = () => {
    return (
        <>
        <h2>How to Play Boolebots</h2>
        <p>
        Want to have some fun while also learning basic Boolean logic? Look on our BooleBots game! In this game,
          you&apos;ll be playing in an arena filled with 8x8 game tiles, where your bots will be zipping around at different
          speeds and in random directions. Each of your bots will be given a Boolean value of either 0 or 1, and you&apos;ll
          get to use the Boolean operations like AND, OR, NOR, and NOT to control them. It&apos;s like having your own little
          army of digital helpers!
        </p>
        <ol>
            <li>First select what attributes you want the bot to have, the most important being the boolean value and it&apos;s operator</li>
            <li>Then click the Battle page button to see your bots and click Battle to watch them go!</li>
            <li>Each bot has a boolean value associated with it. When a collision happens, the Bot that hit first has it&apos;s operator applied to both bots</li>
            <li>The values of both bots are then put through the Boolean operation you can see how the logic is determined <a id="htp-link" href="http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/index.html#logicgates">here</a></li>
            <li>After each collision you&apos;ll see a battle log explaining the outcome</li>
            <li>The game continues with bots colliding and applying boolean operations until only one bot remains. This final bot is the last survivor and is the winner of the game.</li>
        </ol>
    </>
    )
}

export default HowToPlay