//import React from "react";
import '../../styles/components/Modal.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-modal" onClick={onClose}>
					Close
				</button>
				<h2>How to Play Boolebots</h2>
				<p>
					These instructions will be accessible from the footer anywhere in the
					app.
				</p>
				<ol>
					<li>First you do this thing</li>
					<li>Then you do some of this</li>
					<li>After that, you can do this</li>
					<li>Finally, you will want to do this</li>
					<li>Do not forget to do this</li>
				</ol>
			</div>
		</div>
	);
};

export default Modal;
