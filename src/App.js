import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import FormOverlay from './components/FormOverlay';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Provider store={store}>
      <div className={`app`}>
        <Sidebar/>
        <Content />
        <FormOverlay isOpen={isFormOpen} onClose={closeForm} />
      </div>
    </Provider>
  );
}

export default App;
