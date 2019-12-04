import React from 'react';
import { Modal, Image, CloseButton } from 'react-bootstrap';

const ModalComponent = ({ showModal, selectedImage, handleHide, setShowModal }) => {
	return (
		<Modal
			show={showModal}
			onHide={() => handleHide()}
			centered
		>
			<Modal.Body>
				<CloseButton onClick={() => setShowModal(false)} />
				{selectedImage ?
					<Image style={{ height: '330px', maxWidth: '100%' }} alt="selected image"
						src={selectedImage.download_url} /> : null}
			</Modal.Body>
		</Modal>
	);
};

export default ModalComponent;
