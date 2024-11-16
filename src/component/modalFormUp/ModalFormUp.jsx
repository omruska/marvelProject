import React from 'react';
import Modal from 'react-modal';
import FormSignUp from "../formSignUp/FormSignUp";

function ModalFormUp ({ isOpen, onClose, onSignUp}) {

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.77)',
            zIndex: 1000,
        },
        content: {
            width: '60%',
            height: '40%',
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
            <FormSignUp onClose={onClose} onSignUp={onSignUp} />
        </Modal>
    );
};

export default ModalFormUp;