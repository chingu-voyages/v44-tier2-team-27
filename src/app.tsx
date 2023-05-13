import {useEffect, useState} from "react";
import {useBots} from "./context/botsContext.tsx";
import  BattlePage  from "./components/BattlePage";
import { WelcomePage } from "./components/WelcomePage";
import { Layout } from "./components/layout/Layout";
import { ConfigurationPanel } from "./components/ConfigurationPanel";
import {generateRandomBot} from "./misc/functions.ts";

function App() {
  const [mainComponent, setMainComponent] = useState("welcomePage");
  const { createNewBot } = useBots();

  /* the useEffect runs twice because of strict mode.
   You can disable it temporary so that it generates the exact amount of
   bots passed. But it doesn't happen in production, so we can turn it on
   when building
   */
  useEffect(() => {
  for (let i = 0; i < 4; i++) {
    createNewBot(generateRandomBot(4));
  }
  });

  const navigateToConfigurationPanel = () => {
    setMainComponent("configurationPanel");
  };

  const navigateToBattlePage = () => {
    setMainComponent("battlePage");
  };

  return (
    <>
      <Layout>
        {mainComponent === "welcomePage" && <WelcomePage navigateToConfigurationPanel={navigateToConfigurationPanel} />}
        {mainComponent === "configurationPanel" && <ConfigurationPanel navigateToBattlePage={navigateToBattlePage} />}
        {mainComponent === "battlePage" && <BattlePage />}
      </Layout>
    </>
  );
}

export default App;
