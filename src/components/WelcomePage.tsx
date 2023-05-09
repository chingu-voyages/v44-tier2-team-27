import welcomeImage from "../assets/images/games.png";
import "../styles/components/welcomePage.css";
export const WelcomePage = () => {
  return (
    <div className="welcomePageWrapper">
      <div className="welcomeText">
        <h1>BooleBots</h1>
        <p>
          Want to have some fun while also learning basic Boolean logic? Look on our BooleBots game! In this game,
          you'll be playing in an arena filled with 8x8 game tiles, where your bots will be zipping around at different
          speeds and in random directions. Each of your bots will be given a Boolean value of either 0 or 1, and you'll
          get to use the Boolean operations like AND, OR, NOR, and NOT to control them. It's like having your own little
          army of digital helpers!
        </p>
        <button>Lets play!</button>
      </div>
      <div className="welcomeImage">
        <img src={welcomeImage}></img>
      </div>
    </div>
  );
};
