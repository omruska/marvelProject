import React from 'react';
import Modal from 'react-modal';
import BuyForm from "../buyForm/BuyForm";

function ModalBuyForm ({ isOpen, onClose, onBuyNow}) {

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.77)',
            zIndex: 1000,
        },
        content: {
            width: '40%',
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
            <BuyForm onClose={onClose} onBuyNow={onBuyNow} />
        </Modal>
    );
};

export default ModalBuyForm;