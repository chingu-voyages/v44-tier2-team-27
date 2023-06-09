/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Modal from './Modal';
import { CollidedBots, Modals } from '../../misc/interfaces';

interface FooterProps {
	isModalOpen:boolean;
	setIsModalOpen:(value:boolean) => void;
	displayedModal: Modals;
	setDisplayedModal:(modal:Modals) => void;
	collidedBots:CollidedBots[];
	setCollidedBots:(bots: CollidedBots[]) => void;
}

const Footer = ({setIsModalOpen, setDisplayedModal, isModalOpen, displayedModal, collidedBots, setCollidedBots}:FooterProps) => {
	return (
		<div className="footerWrapper">
			<a href="https://github.com/chingu-voyages/v44-tier2-team-27">
				<p>Chingu 2023</p>
				<p>voyage: 44</p>
				<p>team: 27</p>
			</a>

			{/* Instruction modal */}
			<a className="instructionModal" href="#" onClick={() => setIsModalOpen(true)}>
				<h4>how to play</h4>
			</a>

			<Modal 
				isOpen={isModalOpen} 
				setIsModalOpen={setIsModalOpen} 
				displayedModal={displayedModal} 
				collidedBots={collidedBots} 
				setCollidedBots={setCollidedBots}
			/>
		</div>
	);
};

export default Footer;
