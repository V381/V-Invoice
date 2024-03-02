import React, { useEffect, useState } from 'react';
import './PopulatedCard.css';
import { useSelector } from 'react-redux';

function PopulatedCard({ cardData, onClose, onEditClick }) {
  const currentEditingData = useSelector((state) => state.formData.currentEditingData);
  const [localData, setLocalData] = useState(currentEditingData);

  useEffect(() => {
    if (currentEditingData) {
      setLocalData(currentEditingData);
    } else {
      setLocalData(cardData || {});
    }
  }, [currentEditingData, cardData]);

  
  return (
    <div className="populated-card">
      <div className="property">
        <span className="property-label">Client's Name:</span>
        <span className="property-value">{localData?.clientName}</span>
      </div>
      <div className="property">
        <span className="property-label">Client's Email:</span>
        <span className="property-value">{localData?.clientEmail || cardData.clientEmail}</span>
      </div>
      <div className="property">
        <span className="property-label">Street Address:</span>
        <span className="property-value">{localData?.streetAddress || cardData.streetAddress}</span>
      </div>
      <div className="property">
        <span className="property-label">City:</span>
        <span className="property-value">{localData?.city || cardData.city} </span>
      </div>
      <div className="property">
        <span className="property-label">Zip Code:</span>
        <span className="property-value">{localData?.zipCode || cardData.zipCode}</span>
      </div>
      <div className="property">
        <span className="property-label">Country:</span>
        <span className="property-value">{localData?.country || cardData.country}</span>
      </div>
      <div className="property">
        <span className="property-label">Invoice Date:</span>
        <span className="property-value">{localData?.invoiceDate || cardData.invoiceDate}</span>
      </div>
      <div className="property">
        <span className="property-label">Payment Due:</span>
        <span className="property-value">{localData?.paymentDue || cardData.paymentDue}</span>
      </div>
      <div className="property">
        <span className="property-label">Payment Terms:</span>
        <span className="property-value">{localData?.paymentTerms || cardData.paymentTerms}</span>
      </div>
      <div className="property">
        <span className="property-label">Product Description:</span>
        <span className="property-value">{localData?.productDescription || cardData.productDescription}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Name:</span>
        <span className="property-value">{localData?.itemName || cardData.itemName}</span>
      </div>
      <div className="property">
        <span className="property-label">Item City:</span>
        <span className="property-value">{localData?.itemCity || cardData.itemCity}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Price:</span>
        <span className="property-value">{localData?.itemPrice || cardData.itemPrice}</span>
      </div>
      <div className="property">
        <span className="property-label">Item Total:</span>
        <span className="property-value">{localData?.itemTotal || cardData.itemTotal}</span>
      </div>

      <button onClick={onClose}>Close</button>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
}

export default PopulatedCard;
