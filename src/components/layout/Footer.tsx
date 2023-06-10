/* eslint-disable prettier/prettier */
import Modal from './Modal';
import { Modals } from '../../misc/interfaces';

interface FooterProps {
	isModalOpen:boolean;
	setIsModalOpen:(value:boolean) => void;
	displayedModal: Modals;
	setDisplayedModal:(modal:Modals) => void;
}

const Footer = ({setIsModalOpen, setDisplayedModal, isModalOpen, displayedModal}:FooterProps) => {
	const openHowToPlay = () => {
		setIsModalOpen(true);
		setDisplayedModal('HowToPlay');
	} 
	return (
		<div className="footerWrapper">
			<a href="https://github.com/chingu-voyages/v44-tier2-team-27">
				<p>Chingu 2023</p>
				<p>voyage: 44</p>
				<p>team: 27</p>
			</a>

			{/* Instruction modal */}
			<a className="instructionModal" href="#" onClick={openHowToPlay}>
				<h4>how to play</h4>
			</a>

			<Modal 
				isOpen={isModalOpen} 
				setIsModalOpen={setIsModalOpen} 
				displayedModal={displayedModal} 
			/>
		</div>
	);
};

export default Footer;
