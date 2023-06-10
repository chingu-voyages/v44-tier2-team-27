/* eslint-disable prettier/prettier */
import { ChangeEvent, useState, useRef, useEffect, MouseEvent, KeyboardEvent } from 'react';
import '../styles/components/configurationPanel.css';
import { useBots } from '../context/botsContext';
import Bot from '../classes/bot';
import { directionArray, operatorArray } from '../misc/constants';
import { validateName } from '../misc/functions';


interface BotConfigProps {
	bot: Bot;
}

export const BotConfiguration = ({ bot }: BotConfigProps) => {
	const [isNameValid, setIsNameValid] = useState<boolean>(true);
	const [error, setError] = useState<string>('');
	const [nameInput, setNameInput] = useState<string>(bot.name);
	const nameInputRef = useRef<HTMLInputElement>(null);
	const booleanInputRef = useRef<HTMLInputElement>(null)
	const [editingName, setEditingName] = useState<boolean>(false);
	const knobLineRef = useRef<HTMLDivElement>(null);

	const { bots, editBot } = useBots();

	useEffect(() => {
		if(knobLineRef.current) {
			knobLineRef.current.classList.add(bot.direction.toLocaleLowerCase())
		}
		if(booleanInputRef.current) {
			if(bot.value == 0) {
				booleanInputRef.current.checked = false
			} else {
				booleanInputRef.current.checked = true
			}
		}
	},[bots])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		editBot(bot.id, e.target.name, e.target.value);
	};

	const enableEditName = () => {
		setEditingName(true);
		if(nameInputRef.current) {
			nameInputRef.current.disabled = false
		}
	}

	const saveNewName = () => {
		if(nameInput == '') {
			setIsNameValid(false)
			setError('bot must have a name');
			setEditingName(true);
			return
		}
		if(!validateName(bot.id, nameInput, bots)) {
			editBot(bot.id, 'name', nameInput);
			setEditingName(false);
			setIsNameValid(true);
			setError('');
			if(nameInputRef.current) {
				nameInputRef.current.disabled = true;
			}
		} else {
			setIsNameValid(false)
			setError('That name is already in use');
			setEditingName(true);
			return
		}
	}

	const cancelNameInput = () => {
		setNameInput(bot.name)
		setEditingName(false);
		setIsNameValid(true);
		if(nameInputRef.current) {
			nameInputRef.current.disabled = true;
			nameInputRef.current.value = bot.name;
		}
	}

	const changeBooleanValue = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target.checked) {
			editBot(bot.id, 'value', 1);
		} else {
			editBot(bot.id, 'value', 0);
		}
	}

	const directionKnobClick = () => {
		if(knobLineRef.current) {
			switch (bot.direction) {
				case 'North':
					editBot(bot.id, 'direction', 'East');
					knobLineRef.current.classList.remove('north');
					knobLineRef.current.classList.add('east');
					break;
				case 'East':
					editBot(bot.id, 'direction', 'South');
					knobLineRef.current.classList.remove('east');
					knobLineRef.current.classList.add('south');
					break;
				case 'South':
					editBot(bot.id, 'direction', 'West');
					knobLineRef.current.classList.remove('south');
					knobLineRef.current.classList.add('west');
					break;
				case 'West':
					editBot(bot.id, 'direction', 'North');
					knobLineRef.current.classList.remove('west');
					knobLineRef.current.classList.add('north');
					break;
				default:
					break;

			}
		}
	}

	const changeDirection = (e:MouseEvent<HTMLButtonElement>) => {
		const newDirection = (e.target as HTMLButtonElement).id;
		editBot(bot.id, 'direction', newDirection);
		if(knobLineRef.current) {
			switch (newDirection) {
				case 'North':
					knobLineRef.current.classList.add('north');
					knobLineRef.current.classList.remove('east');
					knobLineRef.current.classList.remove('south');
					knobLineRef.current.classList.remove('west');
					break;
				case 'East':
					knobLineRef.current.classList.remove('north');
					knobLineRef.current.classList.add('east');
					knobLineRef.current.classList.remove('south');
					knobLineRef.current.classList.remove('west');
					break;
				case 'South':
					knobLineRef.current.classList.remove('north');
					knobLineRef.current.classList.remove('east');
					knobLineRef.current.classList.add('south');
					knobLineRef.current.classList.remove('west');
					break;
				case 'West':
					knobLineRef.current.classList.remove('north');
					knobLineRef.current.classList.remove('east');
					knobLineRef.current.classList.remove('south');
					knobLineRef.current.classList.add('west');
					break;
				default:
					break;
			}
		}

	}

	const handleKeyboardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key == 'Enter') {
			saveNewName();
		}
		if(e.key == 'Escape') {
			cancelNameInput()
		}
	}
	return (
		<>
			<div className="bot-name">
	 			<input 
					onKeyDown={(e) => handleKeyboardEvent(e)} 
					ref={nameInputRef} 
					disabled 
					defaultValue={nameInput} 
					maxLength={10} 
					onChange={(e) => setNameInput(e.target.value)}
				/>
				{editingName ? 
					<>
						<button className="saveName" onClick={() => saveNewName()}>Save</button>
						<button onClick={() => cancelNameInput()}>Cancel</button>
					</>
				: <button onClick={() => enableEditName()}>Change Name</button>
				}
				{!isNameValid && error? <p className="errorMessage">{error}</p> : null}
	 		</div>
			

			 <div className="configForm">
				{!bot.isActive ? 
					<div className='activate-bot-panel'>
						<button onClick={() => editBot(bot.id, 'isActive', true)}>Activate Bot</button>
					</div> 
				: null}
 				<div className="configInner">
					<div className="value-wrapper">
						<label htmlFor="booleanValue">
						<h4>Boolean Value</h4>
						<div className='boolean-value-container'>
							<p>0</p>
							<p>1</p>
						</div>
	 						<div className="toggle-container">
							 <input ref={booleanInputRef} onChange={(e) => {changeBooleanValue(e)}} type="checkbox" id={`toggle-${bot.id}`} className="toggle" />
								<label htmlFor={`toggle-${bot.id}`} className="toggle-label">
								<span className="slider"></span>
								</label>
							</div>
						</label>
					</div>
						<div className="operator-wrapper">
							<h4>Boolean Operator</h4>
							{operatorArray.map((operator) => (
								<button
									key={operator}
									id={operator}
									onClick={(event) =>
										editBot(
											bot.id,
											'operator',
											(event.target as HTMLButtonElement).id
										)
									}
									className={
										operator === bot.operator
											? 'operator-active'
											: 'operator-inactive'
									}
								>
									{operator}
								</button>
							))}
						</div>
						<div className="speed-wrapper">
							<label htmlFor="speed">
								<h4>Speed:</h4>
								<div className="speed-input">
									{/* numbers for speed input styling */}
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li>
									</ul>
									<input
										type="range"
										name="speed"
										min="1"
										max="5"
										value={bot.speed}
										onChange={handleChange}
									/>
								</div>
							</label>
						</div>
						<div className="direction-wrapper">
							<h4>Direction:</h4>

							{directionArray.map((direction) => (
								<button
									key={direction}
									id={direction}
									onClick={(e) => {changeDirection(e)}}
									className={
										direction === bot.direction
											? 'direction-active'
											: 'direction-inactive'
									}
								>
									{direction}
								</button>
							))}
							{/* knob to indicate boolean direction */}
							<div onClick={() => directionKnobClick()} className="direction-knob">
								<div className="knob-ring">
									<div className="knob-inner">
										<div ref={knobLineRef} className="knob-line"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{bot.isActive ? <button className="deactivate" onClick={() => editBot(bot.id, 'isActive', false)}> Deactivate Bot</button> : null}
				</div>
		</>
	)

};
