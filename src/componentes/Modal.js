import React from 'react';
import './Modal.css';
import Form from './Form.js'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <Form />
            </div>
        </div>
    );
}

export default Modal;
