import React from 'react';
import styles from './../FormComponent.module.css';

function InputField({ label, id, name, defaultValue, onChange, type }) {
  return (
    <div className={styles.formField}>
      <label className={styles.label} htmlFor={id}>
        {label}:
      </label>
      <input
        className={styles.inputField}
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
