import React from 'react';
import { FaTimes } from 'react-icons/fa';
import FormComponent from './FormComponent';
import styles from './FormOverlay.module.css';

function FormOverlay({ onClose, isOpen, onSubmit, cardData, isEditing, onCloseForm }) {
  
  const closeFormBothEditAndSubmit = () => {
    onClose?.();
    onCloseForm?.();
  };

  return (
    <div className={`${styles.formOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.formContent}>
        <FaTimes className={styles.closeIcon} onClick={closeFormBothEditAndSubmit} />
        <FormComponent 
          isEditing={isEditing} 
          onSubmit={onSubmit} 
          cardData={cardData} 
          onCloseForm={onCloseForm} />
      </div>
    </div>
  );
}

export default FormOverlay;
