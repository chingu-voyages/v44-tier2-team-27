import infoCardDesk from "../assets/images/info_card_desk.png"
import infoCardMobile from "../assets/images/info_card_mobile.png"
import booleanImg from "../assets/images/boolean.svg"
import "../styles/components/welcomePage.css"

interface welcomePageProps {
  navigateToConfigurationPanel: () => void;
}

export const WelcomePage = ({ navigateToConfigurationPanel }: welcomePageProps) => {
  return (
    <div className="welcomePageWrapper">
      {/* <div className="welcomeText"> 
        <h1>BooleBots</h1>
        <p>
          Want to have some fun while also learning basic Boolean logic? Look on our BooleBots game! In this game,
          you'll be playing in an arena filled with 8x8 game tiles, where your bots will be zipping around at different
          speeds and in random directions. Each of your bots will be given a Boolean value of either 0 or 1, and you'll
          get to use the Boolean operations like AND, OR, NOR, and NOT to control them. It's like having your own little
          army of digital helpers!
        </p>
      </div>*/}
      <div className="welcomeCont">
        <img className="infoCardMobile"src={infoCardMobile}></img>
      <img className="infoCardDesk" src={infoCardDesk}></img>
      <button onClick={navigateToConfigurationPanel}><h2>start</h2></button>
        <div className="infoCardNumbers">
          <h3>44.27.23</h3>
        </div>
        <h2 className="infoCardText">a game of boolean logic</h2>
        <img className="booleanSVG3" src={booleanImg} alt="" />
      </div>
    </div>
  );
};
