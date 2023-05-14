import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import "../styles/components/botConfiguration.css";
import { useBots } from "../context/botsContext";
import Bot from "../classes/bot";

interface BotConfigProps {
  bot: Bot;
}

export const BotConfiguration = ({ bot }: BotConfigProps) => {
  const { id, name, color, operator, value, speed, isAlive, score, isActive, direction } = bot;
  const [botNameValue, setBotNameValue] = useState("");
  const [isNameValid, setIsNameValid] = useState<null | boolean>(null);
  const [isFormVissible, setIsFormVissible] = useState(false);
  const [botData, setBotData] = useState({ name, operator, value, speed, direction });
  const { bots, editBot } = useBots();

  const validateName = useCallback(
    (name: string) => {
      const existedNames = bots.map((bot) => bot.name);
      if (existedNames.length === 0) setIsNameValid(true);
      else if (existedNames.includes(name)) {
        setIsNameValid(false);
      } else setIsNameValid(true);
    },
    [bots]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBotData({
      ...botData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getBotNameSettle = setTimeout(() => {
      setBotNameValue(botData.name);
    }, 2000);
    return () => clearTimeout(getBotNameSettle);
  }, [botData]);

  useEffect(() => {
    botNameValue && validateName(botNameValue);
  }, [botNameValue, validateName]);

  const handleNext = () => {
    setIsFormVissible(true);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    editBot(id, name, botData.name);
    console.log(botData.name); //botData.name is changed, form is working properly
    console.log(bots); //bot form context dont change name property
  };

  return (
    <div className="botConfigurationWrapper">
      <form onSubmit={handleSubmit}>
        {!isFormVissible && !isNameValid && (
          <div>
            <h2>Choose Your Bot's Name</h2>
            <label htmlFor="name">Bot name:</label>
            <input id="name" name="name" type="text" value={botData.name} onChange={handleChange} />
          </div>
        )}
        {!isFormVissible && isNameValid && (
          <>
            <p>Welcome, {botNameValue}</p>
            <button onClick={handleNext}>next</button>
          </>
        )}
        {!isFormVissible && isNameValid === false && (
          <>
            <p>Name already exist</p>
          </>
        )}
        {isFormVissible && (
          <>
            <label htmlFor="booleanValue">
              Boolean Value 0 <input type="radio" name="value" value="0" onChange={handleChange} />
              1 <input type="radio" name="value" value="1" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="operator">
              Boolean Operator:
              <select name="operator" value={botData.operator} onChange={handleChange}>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="NOR">NOR</option>
                <option value="NOT">NOT</option>
              </select>
            </label>
            <label htmlFor="speed">
              <input type="range" name="speed" min="1" max="5" value={botData.speed} onChange={handleChange} />
            </label>
            <label htmlFor="direction">
              Starting direction:
              <select name="direction" value={botData.direction} onChange={handleChange}>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
              </select>
            </label>
            <button type="submit">Create Bot</button>
          </>
        )}
      </form>
    </div>
  );
};
