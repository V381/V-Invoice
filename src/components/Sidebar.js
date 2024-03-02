import React, { useState } from 'react';
import './Sidebar.css';
import FormOverlay from './FormOverlay';
import { FaPlus } from 'react-icons/fa';

function Sidebar() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={`sidebar ${isFormOpen ? 'form-open' : ''}`}>
      <FaPlus className="plus-icon" onClick={openForm} />
      {isFormOpen && <FormOverlay onClose={closeForm} isOpen={isFormOpen} />}
      <p>V</p>
    </div>
  );
}

export default Sidebar;
