import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Content.css';
import PopulatedCard from './PopulatedCard';

function Content() {
  const submittedFormDataArray = useSelector((state) => state.formData.formDataArray) ?? [];

  const [selectedCard, setSelectedCard] = useState(null);

  const openPopulatedCard = (cardData) => {
    setSelectedCard(cardData);
  };

  const closePopulatedCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="content">
      <main className='form-list'>
        {submittedFormDataArray.length > 0 ? (
          submittedFormDataArray.map((formData, index) => (
            <div className="card-wrapper" key={index}>
              <button onClick={() => openPopulatedCard({ ...formData })}>
                Client`s Name: <strong>{formData.clientName}</strong>
              </button>
            </div>
          ))
        ) : (
          <p className='submit-text'>Submit the form to create cards.</p>
        )}
      </main>

      {selectedCard && (
        <div className={`card-modal ${selectedCard ? 'open' : ''}`}>
          <PopulatedCard cardData={selectedCard} onClose={closePopulatedCard} />
        </div>
      )}
    </div>
  );
}

export default Content;
