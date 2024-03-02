import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import FormComponent from './FormComponent';
import './FormOverlay.css';

function FormOverlay({ onClose, isOpen, onSubmit, cardData, isEditing }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <div className={`form-overlay ${isVisible ? 'open' : ''}`}>
      <div className="form-content">
        <FaTimes className="close-icon" onClick={onClose} />
        {isEditing ? (
          <FormComponent isEditing={isEditing} onSubmit={onSubmit} cardData={cardData} />
        ) : (
          <FormComponent isEditing={false} />
        )}
      </div>
    </div>
  );
}

export default FormOverlay;
