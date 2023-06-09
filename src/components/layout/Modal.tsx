/* eslint-disable prettier/prettier */
import { Modals, CollidedBots } from '../../misc/interfaces';
import '../../styles/components/Modal.css';
import BotCollision from '../modals/BotCollision';
import BotWinner from '../modals/BotWinner';
import HowToPlay from '../modals/HowToPlay';

interface ModalProps {
	isOpen: boolean;
	displayedModal: Modals;
	setIsModalOpen: (value:boolean) => void;
	collidedBots:CollidedBots[];
	setCollidedBots:(bots: CollidedBots[]) => void;
}

const Modal = ({ isOpen, setIsModalOpen, displayedModal, collidedBots, setCollidedBots }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-modal" onClick={() => setIsModalOpen(false)}>
					Close
				</button>
					{displayedModal=='HowToPlay' && <HowToPlay/>}
					{displayedModal=='BotCollision' && <BotCollision collidedBots={collidedBots}/>}
					{displayedModal=='BotWinner' && <BotWinner/>}
			</div>
		</div>
	);
};

export default Modal;
