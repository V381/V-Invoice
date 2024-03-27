import React from 'react';
import styles from './FormComponent.module.css'; 
import InputField from './InputField'; 

function FormField({ type, label, id, name, value, onChange, options }) {
  if (type === 'select') {
    return (
      <div className={`${styles.formField} ${styles[name]}`}>
        <label className={styles.label} htmlFor={id}>{label}:</label>
        <select className={`${styles.inputField} ${styles.selectField}`} id={id} name={name} value={value} onChange={onChange}>
          {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  } else {
    return (
      <div className={`${styles.formField} ${styles[name]}`}>
        <InputField
          label={label}
          id={id}
          name={name}
          defaultValue={value}
          onChange={onChange}
          type={type}
        />
      </div>
    );
  }
}

export default FormField;
