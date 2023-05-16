import { BotConfiguration } from "./BotConfiguration";
import "../styles/components/configurationPanel.css";
import { useBots } from "../context/botsContext";

interface ConfigurationPanelProps {
	navigateToBattlePage: () => void;
}

feature/configuration-panel
export const ConfigurationPanel = ({ navigateToBattlePage }: ConfigurationPanelProps) => {
  const { bots } = useBots();

  return (
    <>
      <div className="botsConfigurationWrapper">
        {bots.map((bot) => (
          <BotConfiguration key={bot.id} bot={bot} />
        ))}
      </div>

      <button onClick={navigateToBattlePage}>Battle Page</button>
    </>
  );
