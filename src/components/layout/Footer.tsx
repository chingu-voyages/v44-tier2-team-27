import { useState } from 'react';
import Modal from './Modal';

export const Footer = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="footerWrapper">
			<a href="https://github.com/chingu-voyages/v44-tier2-team-27">
				<p>Chingu 2023</p>
				<p>voyage: 44</p>
				<p>team: 27</p>
			</a>

			{/* Instruction modal */}
			<a className="instructionModal" href="#" onClick={handleModalOpen}>
				<h4>how to play</h4>
			</a>

			<Modal isOpen={isModalOpen} onClose={handleModalClose} />
		</div>
	);
};
