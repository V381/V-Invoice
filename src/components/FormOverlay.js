import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import FormComponent from './FormComponent';
import './FormOverlay.css';

function FormOverlay({ onClose, isOpen, onSubmit, cardData, isEditing, onCloseForm }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const closeFormBothEditAndSubmit = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  
    if (onCloseForm && typeof onCloseForm === 'function') {
      onCloseForm();
    }
  };
  

  return (
    <div className={`form-overlay ${isVisible ? 'open' : ''}`}>
      <div className="form-content">
        <FaTimes className="close-icon" onClick={closeFormBothEditAndSubmit}  />
        {isEditing ? (
          <FormComponent isEditing={isEditing} onSubmit={onSubmit} cardData={cardData} onCloseForm={onCloseForm} />
        ) : (
          <FormComponent isEditing={false} />
        )}
      </div>
    </div>
  );
}

export default FormOverlay;
