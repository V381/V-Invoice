import React, { useState } from 'react';
import './Sidebar.css';
import FormOverlay from './FormOverlay';
import { FaPlus } from 'react-icons/fa';

function Sidebar() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(prevIsFormOpen => !prevIsFormOpen);
  };

  return (
    <div className={`sidebar ${isFormOpen ? 'form-open' : ''}`}>
      <FaPlus className="plus-icon" onClick={toggleForm} />
      {isFormOpen && <FormOverlay onClose={toggleForm} isOpen={isFormOpen} />}
      <p>V</p>
    </div>
  );
}

export default Sidebar;
