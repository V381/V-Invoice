import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Content.module.css';
import PopulatedCard from "./PopulatedCard";
import { FaTimes, FaQuestion } from 'react-icons/fa';
import FormOverlay from './FormOverlay';
import FormComponent from './FormComponent';
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

  return (
    <div className={styles.content}>
      <main className={styles.formList}>
        {formDataArray.length > 0 ? formDataArray.map((formData, index) => (
          <div className={styles.cardWrapper} key={index}>
            <button onClick={() => openPopulatedCard(formData)}>
              <strong>Client's Name: {formData.clientName}</strong>
              <FaTimes className={styles.removeCardIcon} title="Delete card" onClick={(e) => { e.stopPropagation(); removeCard(formData); }} />
            </button>
          </div>
        )) : <p className={styles.submitText}>Submit the form to create cards.</p>}
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
    </div>
  );
}

export default Content;
