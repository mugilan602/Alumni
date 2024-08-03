// components/Modal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onRequestClose, content }) => {
    useEffect(() => {
        if (isOpen) {
            // Disable background scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Enable background scroll
            document.body.style.overflow = 'auto';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Read More Modal"
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <button onClick={onRequestClose} className={styles.closeButton}>×</button>
            <div className={styles.modalContent}>
                {content}
            </div>
        </Modal>
    );
};

export default CustomModal;
