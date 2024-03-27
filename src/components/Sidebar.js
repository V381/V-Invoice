import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import FormOverlay from './FormOverlay';
import { FaPlus } from 'react-icons/fa';

function Sidebar() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(prevIsFormOpen => !prevIsFormOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isFormOpen ? styles.formOpen : ''}`}>
      <FaPlus className={styles.plusIcon} onClick={toggleForm} />
      {isFormOpen && <FormOverlay onClose={toggleForm} isOpen={isFormOpen} />}
      <p className={styles.letterV}>V</p>
    </div>
  );
}

export default Sidebar;
