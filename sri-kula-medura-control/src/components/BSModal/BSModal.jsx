import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import './Modal.css'

const BSModal = ({children, show, handleClose, modalTitle}) => {
	return (
		<>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title className={'modal-title'}>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{children}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default BSModal;