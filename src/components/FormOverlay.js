import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import FormComponent from './FormComponent'; 
import './FormOverlay.css';

function FormOverlay({ onClose, isOpen, onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    } else {
      setIsVisible(false);
      onClose();
    }
  }, [isOpen, onClose]);

  return (
    <div className={`form-overlay ${isOpen && isVisible ? 'open' : ''}`}>
      <div className="form-content">
        <FaTimes className="close-icon" onClick={onClose} />
        <FormComponent onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

export default FormOverlay;
