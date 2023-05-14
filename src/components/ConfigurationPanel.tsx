import { BotConfiguration } from "./BotConfiguration";
import "../styles/components/configurationPanel.css";
import { useBots } from "../context/botsContext";
import BotConfigSimple from "./BotConfigSimple";

interface ConfigurationPanelProps {
  navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({ navigateToBattlePage }: ConfigurationPanelProps) => {
  const { bots } = useBots();

  return (
    <>
      <div className="botsConfigurationWrapper">
        {bots.map((bot) => (
          <BotConfiguration bot={bot} />
        ))}
      </div>
      <div className="botsConfigurationWrapper">
        {bots.map((bot) => (
          <BotConfigSimple key={bot.id} bot={bot} />
        ))}
      </div>

      <button onClick={navigateToBattlePage}>Battle Page</button>
    </>
  );
};
