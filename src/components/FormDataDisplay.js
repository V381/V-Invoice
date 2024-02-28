import React from 'react';
import './FormDataDisplay.css';

function FormDataDisplay({ formData, onClose }) {
  return (
    <div className="form-data-display">
      <div className="form-data-content">
        <h2>Submitted Form Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default FormDataDisplay;
