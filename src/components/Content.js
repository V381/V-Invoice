import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Content.css';
import PopulatedCard from "./PopulatedCard"
import { FaTimes } from 'react-icons/fa';
import FormOverlay from './FormOverlay';
import FormComponent from './FormComponent';
import { 
   setCurrentEditingData,
   clearCurrentEditingData, 
   removeCardAction } from '../redux/formActions'; 


function Content() {
  const submittedFormDataArray = useSelector((state) => state.formData.formDataArray) ?? [];
  const currentEditingData = useSelector((state) => state.formData.currentEditingData);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (isEditing && selectedCard) {
      dispatch(setCurrentEditingData(selectedCard));
    }
  }, [isEditing, selectedCard, dispatch]);

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const removeCard = (cardData) => {
    dispatch(removeCardAction(cardData.id));
  }

  const openPopulatedCard = (cardData) => {
    dispatch(clearCurrentEditingData());
    setIsEditing(false);
    setIsFormOpen(false);
    setSelectedCard(cardData);
  };

  const openEditForm = () => {
    setIsEditing(true);
    setIsFormOpen(true);
    dispatch(setCurrentEditingData(selectedCard));
  };

  const closePopulatedCard = () => {
    setSelectedCard(null);
    setIsEditing(false);
    setIsFormOpen(false);
    dispatch(clearCurrentEditingData());
  };
  return (
    <div className="content">
      <main className="form-list">
        {submittedFormDataArray.length > 0 ? (
          submittedFormDataArray.map((formData, index) => (
            <div className="card-wrapper" key={index}>
              <button onClick={() => openPopulatedCard({ ...formData })}>
                <strong>Client's Name:  {formData.clientName}</strong>
                <FaTimes className="remove-card-icon" title="Delete card" onClick={(e) => { e.stopPropagation(); removeCard(formData); }} />
              </button>
            </div>
          ))
          ) : (
            <p className="submit-text">Submit the form to create cards.</p>
        )}
      </main>

      {(isEditing || selectedCard) && (
        <PopulatedCard
          cardData={selectedCard}
          onClose={closePopulatedCard}
          onEditClick={openEditForm}
          isEditing={isEditing}
        />
      )}
      {isEditing && (
        <FormOverlay isOpen={isFormOpen} onCloseForm={closeForm} isEditing={isEditing} cardData={currentEditingData}>
          <FormComponent onSubmit={closePopulatedCard} onCloseForm={closeForm} cardData={currentEditingData} />
        </FormOverlay>
      )}
    </div>
  );
}

export default Content;
