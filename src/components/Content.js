import React from 'react';
import { useSelector } from 'react-redux';
import './Content.css';

function Content() {
  const formData = useSelector((state) => state.formData);
  return (
    <div className="content">
      <main>
        {formData.isFormSubmitted ? (
          <>
            <h1>Client's Name: {formData.formData.clientName}</h1>
            <p>Email: {formData.formData.clientEmail}</p>
          </>
        ) : (
          <p>Submit the form to see the data here.</p>
        )}
      </main>
    </div>
  );
}

export default Content;
