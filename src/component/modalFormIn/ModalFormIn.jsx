import React from 'react';
import Modal from 'react-modal';
import FormSignIn from "../formSignIn/FormSignIn";

function ModalFormUp ({ isOpen, onClose, onSignIn}) {

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.77)',
            zIndex: 1000,
        },
        content: {
            width: '60%',
            height: '30%',
            margin: 'auto',
            border: '1px solid #ccc',
            background: 'rgba(255,255,255,0.92)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            zIndex: 1000,
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Модальное окно"
            style={modalStyles}
        >
            <FormSignIn onClose={onClose} onSignIn={onSignIn} />
        </Modal>
    );
};

export default ModalFormUp;