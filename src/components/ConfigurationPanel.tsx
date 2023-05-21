import configCard from "../assets/images/Config_card.png"
import enterBtn from "../assets/images/enter_btn.png"
import "../styles/components/configurationPanel.css"

// import configMobile from "../assets/images/config_panels/config_panel_mobile.png"
// import configDesk from "../assets/images/config_panels/config_panel_desk.png"

interface ConfigurationPanelProps {
  navigateToBattlePage: () => void;
}

export const ConfigurationPanel = ({ navigateToBattlePage }: ConfigurationPanelProps) => {
  const configCards = [
    { id: 1, className: "config1", labelText: "enter your bot's name", buttonAltText: "1" },
    { id: 2, className: "config2", labelText: "enter your bot's name", buttonAltText: "2" },
    { id: 3, className: "config3", labelText: "enter your bot's name", buttonAltText: "3" },
    { id: 4, className: "config4", labelText: "enter your bot's name", buttonAltText: "4" },
  ];
  return (
    <>
      <div className="configContainer">
        <div className="configName">
          {configCards.map((card) => (
            <section key={card.id}>
              <img className={`configCard ${card.className}`} src={configCard} alt="Configuration Card" />
              <label htmlFor={`nameEnter-${card.id}`}>{card.labelText}</label>
              <input id={`nameEnter-${card.id}`} type="text" required />
              <button onClick={navigateToBattlePage}>
                <img src={enterBtn} alt={`Enter Button ${card.buttonAltText}`} />
              </button>
              <p>{card.buttonAltText}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};







