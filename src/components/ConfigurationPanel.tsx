import { BotConfiguration } from "./BotConfiguration";
import "../styles/components/configurationPanel.css";

interface ConfigurationPanelProps {
  navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({ navigateToBattlePage }: ConfigurationPanelProps) => {

  return (
    <>
      <div className="botsConfigurationWrapper">
        <BotConfiguration />
        <BotConfiguration />
        <BotConfiguration />
        <BotConfiguration />
      </div>

      <button onClick={navigateToBattlePage}>Battle Page</button>
    </>
  );
};
