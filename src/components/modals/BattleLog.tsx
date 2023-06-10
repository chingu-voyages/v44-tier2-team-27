/* eslint-disable prettier/prettier */
import { useBots } from "../../context/botsContext";

interface BattleLogProps {
    setIsModalOpen:(value: boolean) => void; 
}

const BattleLog = ({setIsModalOpen}:BattleLogProps) => {
    const {battleLog, botWinner, setBotWinner, resetBots, updateBattleLog} = useBots()
    const playAgainClick = () => {
        setBotWinner(null)
        resetBots()
        updateBattleLog(null)
        setIsModalOpen(false)
    }
    return (
        <>
        {botWinner ? 
            <div className="bot-winner-container">
                <h2>Bot Winner:</h2>
                <div className="bot-details">
					<p className="bot-name">{botWinner.name}</p>
					<div className="score"></div>
					<div className="details">
						<div className="tooltip">
							<p className="dark">Value:</p>
							<p className="light">{botWinner.value}</p>
						</div>
						<div className="tooltip">
							<p className="dark">Speed:</p>
							<p className="light">{botWinner.speed}</p>
						</div>
						<div className="tooltip">
							<p className="dark">OP:</p>
							<p className="light">{botWinner.operator}</p>
							</div>
						<div className="tooltip">
							<p className="dark">Dir:</p>
							<p className="light">{botWinner.direction}</p>
						</div>
					</div>
                </div>
                <button className="battle-button" onClick={playAgainClick}>Play again</button>
            </div>
        : null}
        <h2 className="battle-log-title">Battle Log</h2>
        {
            battleLog.map((log, i) => 
                <div className="log-row" key={i}>
                    <div className="bot-container" key={i}>
                        {log.winner == 'bot1' ? <p className="battle-winner-text">WINNER</p> : null} 
                        {log.winner == 'bot2' ? <p className="battle-loser-text">LOSER</p> : null}
                        {log.winner == 'tie' ? <p className="battle-tie-text">TIE</p> : null}
                        <div className="bot-details">
                            <p className="bot-name">{log.bot1.name}</p>
                            <div className="score"></div>
                            <div className="details">
                                <div className="tooltip">
                                    <p className="dark">Value:</p>
                                    <p className="light">{log.bot1.value}</p>
                                </div>
                                <div className="tooltip">
                                    <p className="dark">Speed:</p>
                                    <p className="light">{log.bot1.speed}</p>
                                </div>
                                <div className="tooltip">
                                    <p className="dark">OP:</p>
                                    <p className="light">{log.bot1.operator}</p>
                                    </div>
                                <div className="tooltip">
                                    <p className="dark">Dir:</p>
                                    <p className="light">{log.bot1.direction}</p>
                                </div>
                            </div>             
                        </div>
                    </div>
                    <h2 className="vs">VS</h2>
                    <div className="bot-container" key={i}>
                        {log.winner == 'bot2' ? <p className="battle-winner-text">WINNER</p> : null} 
                        {log.winner == 'bot1' ? <p className="battle-loser-text">LOSER</p> : null}
                        {log.winner == 'tie' ? <p className="battle-tie-text">TIE</p> : null}
                        <div className="bot-details">
                            <p className="bot-name">{log.bot2.name}</p>
                            <div className="score"></div>
                            <div className="details">
                                <div className="tooltip">
                                    <p className="dark">Value:</p>
                                    <p className="light">{log.bot2.value}</p>
                                </div>
                                <div className="tooltip">
                                    <p className="dark">Speed:</p>
                                    <p className="light">{log.bot2.speed}</p>
                                </div>
                                <div className="tooltip">
                                    <p className="dark">OP:</p>
                                    <p className="light">{log.bot2.operator}</p>
                                    </div>
                                <div className="tooltip">
                                    <p className="dark">Dir:</p>
                                    <p className="light">{log.bot2.direction}</p>
                                </div>
                            </div>             
                        </div>
                    </div>
                </div>
            )
        }
    </>
    )
}

export default BattleLog;
