import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Content.css';
import PopulatedCard from "./PopulatedCard";
import { FaTimes, FaQuestion } from 'react-icons/fa';
import FormOverlay from './FormOverlay';
import FormComponent from './FormComponent';
import HelpModal from './HelpModal';
import { setCurrentEditingData, clearCurrentEditingData, removeCardAction } from '../redux/formActions';

function Content() {
  const { formDataArray = [], currentEditingData } = useSelector(state => state.formData);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isEditing: false,
    isFormOpen: false,
    selectedCard: null,
    isHelpModalOpen: false,
  });

  useEffect(() => {
    if (state.isEditing && state.selectedCard) {
      dispatch(setCurrentEditingData(state.selectedCard));
    }
  }, [state.isEditing, state.selectedCard, dispatch]);

  const setPartialState = useCallback((updates) =>{
    setState(prevState => ({ ...prevState, ...updates })) 
  });

  const closeForm = useCallback(() => setPartialState({ isFormOpen: false }), []);

  const removeCard = useCallback((cardData) => {
    dispatch(removeCardAction(cardData.id));
  }, [dispatch]);

  const openPopulatedCard = useCallback((cardData) => {
    dispatch(clearCurrentEditingData());
    setPartialState({ isEditing: false, isFormOpen: false, selectedCard: cardData });
  }, [dispatch]);

  const openEditForm = useCallback(() =>  {
    dispatch(setCurrentEditingData(state.selectedCard))
    setPartialState({ isEditing: true, isFormOpen: true })});

  const closePopulatedCard = useCallback(() => {
    dispatch(clearCurrentEditingData());
    dispatch(setCurrentEditingData(state.selectedCard))
    setPartialState({ selectedCard: null, isEditing: false, isFormOpen: false });
  }, [dispatch]);

  const toggleHelpModal = useCallback(() => setPartialState(prevState => ({ isHelpModalOpen: !prevState.isHelpModalOpen })), []);

  return (
    <div className="content">
      <main className="form-list">
        <FaQuestion className="close-icon icon-style" onClick={toggleHelpModal} />
        {formDataArray.length > 0 ? formDataArray.map((formData, index) => (
          <div className="card-wrapper" key={index}>
            <button onClick={() => openPopulatedCard(formData)}>
              <strong>Client's Name: {formData.clientName}</strong>
              <FaTimes className="remove-card-icon" title="Delete card" onClick={(e) => { e.stopPropagation(); removeCard(formData); }} />
            </button>
          </div>
        )) : <p className="submit-text">Submit the form to create cards.</p>}
      </main>

      {(state.isEditing || state.selectedCard) && (
        <PopulatedCard
          cardData={state.selectedCard}
          onClose={closePopulatedCard}
          onEditClick={openEditForm}
          isEditing={state.isEditing}
        />
      )}
      {state.isEditing && (
        <FormOverlay isOpen={state.isFormOpen} onCloseForm={closeForm} isEditing={state.isEditing} cardData={currentEditingData}>
          <FormComponent onSubmit={closePopulatedCard} onCloseForm={closeForm} cardData={state.selectedCard} />
        </FormOverlay>
      )}
      {state.isHelpModalOpen && <HelpModal isOpen={state.isHelpModalOpen} onClose={toggleHelpModal} />}
    </div>
  );
}

export default Content;
