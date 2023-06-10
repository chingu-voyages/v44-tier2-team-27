/* eslint-disable prettier/prettier */
import { Modals } from '../../misc/interfaces';
import '../../styles/components/Modal.css';
import BattleLog from '../modals/BattleLog';
import HowToPlay from '../modals/HowToPlay';

interface ModalProps {
	isOpen: boolean;
	displayedModal: Modals;
	setIsModalOpen: (value:boolean) => void;
}

const Modal = ({ isOpen, setIsModalOpen, displayedModal }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-modal" onClick={() => setIsModalOpen(false)}>
					Close
				</button>
					{displayedModal=='HowToPlay' && <HowToPlay/>}
					{displayedModal=='BattleLog' && <BattleLog setIsModalOpen={setIsModalOpen}/>}
			</div>
		</div>
	);
};

export default Modal;
