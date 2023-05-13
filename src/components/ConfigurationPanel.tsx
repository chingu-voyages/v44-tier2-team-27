interface ConfigurationPanelProps {
  navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({ navigateToBattlePage }: ConfigurationPanelProps) => {

  return (
    <>
      <h2>Configuration Pannel</h2>
      <button onClick={navigateToBattlePage}>Battle Page</button>
    </>
  );
};
