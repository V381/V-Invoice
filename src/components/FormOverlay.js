import React from 'react';
import { FaTimes } from 'react-icons/fa';
import FormComponent from './FormComponent';
import './FormOverlay.css';

function FormOverlay({ onClose, isOpen, onSubmit, cardData, isEditing, onCloseForm }) {
  
  const closeFormBothEditAndSubmit = () => {
    onClose?.();
    onCloseForm?.();
  };

  return (
    <div className={`form-overlay ${isOpen ? 'open' : ''}`}>
      <div className="form-content">
        <FaTimes className="close-icon" onClick={closeFormBothEditAndSubmit} />
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
