import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import FormOverlay from './components/FormOverlay';
import FormDataDisplay from './components/FormDataDisplay';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormComponent from './components/FormComponent';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Provider store={store}>
      <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} />
        <Content toggleSidebar={toggleSidebar} />
        <FormOverlay isOpen={isFormOpen} onClose={closeForm} />
      </div>
    </Provider>
  );
}

export default App;
