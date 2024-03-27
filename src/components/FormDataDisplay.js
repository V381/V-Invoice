import React from 'react';
import styles from './FormDataDisplay.module.css';

function FormDataDisplay({ formData, onClose }) {
  return (
    <div className={styles.FormDataDisplay}>
      <div className={styles.formDataContent}>
        <h2>Submitted Form Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default FormDataDisplay;
