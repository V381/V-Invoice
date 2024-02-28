import React from 'react';
import './Sidebar.css';
import { FaPlus } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
  const iconStyle = {
    fontSize: '24px',
    color: 'red',
  };

  return (
    <div className={`sidebar`}>
       <FaPlus className="plus-icon" />
    </div>
  );
}

export default Sidebar;
