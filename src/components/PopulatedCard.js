import React from 'react';
import './PopulatedCard.css';

function PopulatedCard({ cardData, onClose, onEditClick }) {
  return (
    <div className="populated-card">
      <div className="property">
        <span className="property-label">Client's Name:</span>
        <span className="property-value">{cardData.clientName}</span>
      </div>
      <div className="property">
        <span className="property-label">Client's Email:</span>
        <span className="property-value">{cardData.clientEmail}</span>
      </div>
      <div className="property">
        <span className="property-label">Street Address:</span>
        <span className="property-value">{cardData.streetAddress}</span>
      </div>
      <div className="property">
        <span className="property-label">City:</span>
        <span className="property-value">{cardData.city}</span>
      </div>
      <div className="property">
        <span className="property-label">Zip Code:</span>
        <span className="property-value">{cardData.zipCode}</span>
      </div>
      <div className="property">
        <span className="property-label">Country:</span>
        <span className="property-value">{cardData.country}</span>
      </div>
      <div className="property">
        <span className="property-label">Invoice Date:</span>
        <span className="property-value">{cardData.invoiceDate}</span>
      </div>
      <div className="property">
        <span className="property-label">Payment Due:</span>
        <span className="property-value">{cardData.paymentDue}</span>
      </div>
      <div className="property">
        <span className="property-label">Payment Terms:</span>
        <span className="property-value">{cardData.paymentTerms}</span>
      </div>
      <div className="property">
        <span className="property-label">Product Description:</span>
        <span className="property-value">{cardData.productDescription}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Name:</span>
        <span className="property-value">{cardData.itemName}</span>
      </div>
      <div className="property">
        <span className="property-label">Item City:</span>
        <span className="property-value">{cardData.itemCity}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Price:</span>
        <span className="property-value">{cardData.itemPrice}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Total:</span>
        <span className="property-value">{cardData.itemTotal}</span>
      </div>

      <button onClick={onClose}>Close</button>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
}

export default PopulatedCard;
