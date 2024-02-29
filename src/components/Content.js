import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Content.css';
import PopulatedCard from "./PopulatedCard";
import FormOverlay from './FormOverlay';
import FormComponent from './FormComponent';

function Content() {
  const submittedFormDataArray = useSelector((state) => state.formData.formDataArray) ?? [];
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openPopulatedCard = (cardData) => {
    setSelectedCard(cardData);
    setIsEditing(false);
    setIsFormOpen(false);
  };

  const openEditForm = () => {
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const closePopulatedCard = () => {
    setSelectedCard(null);
    setIsEditing(false);
    setIsFormOpen(false);
  };

  return (
    <div className="content">
      <main className="form-list">
        {submittedFormDataArray.length > 0 ? (
          submittedFormDataArray.map((formData, index) => (
            <div className="card-wrapper" key={index}>
              <button onClick={() => openPopulatedCard({ ...formData })}>
                Client's Name: <strong>{formData.clientName}</strong>
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
        <FormOverlay isOpen={isFormOpen} onClose={closePopulatedCard}>
          <FormComponent cardData={selectedCard} onSubmit={closePopulatedCard} />
        </FormOverlay>
      )}
    </div>
  );
}

export default Content;
