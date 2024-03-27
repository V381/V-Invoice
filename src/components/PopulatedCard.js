import React from 'react';
import './PopulatedCard.css';
import { useSelector } from 'react-redux';

function PopulatedCard({ cardData, onClose, onEditClick }) {
  const currentEditingData = useSelector((state) => state.formData.currentEditingData);
  const localData = currentEditingData || cardData;

  const properties = [
    { label: "Client's Name", value: localData.clientName },
    { label: "Client's Email", value: localData.clientEmail },
    { label: "Street Address", value: localData.streetAddress },
    { label: "City", value: localData.city },
    { label: "Zip Code", value: localData.zipCode },
    { label: "Country", value: localData.country },
    { label: "Invoice Date", value: localData.invoiceDate },
    { label: "Payment Due", value: localData.paymentDue },
    { label: "Payment Terms", value: localData.paymentTerms },
    { label: "Product Description", value: localData.productDescription },
    { label: "Item Name", value: localData.itemName },
    { label: "Item City", value: localData.itemCity },
    { label: "Item Price", value: localData.itemPrice },
    { label: "Item Total", value: localData.itemTotal },
  ];

  return (
    <div className="populated-card">
      {properties.map((prop, index) => (
        <div key={index} className="property">
          <span className="property-label">{prop.label}:</span>
          <span className="property-value">{prop.value}</span>
        </div>
      ))}
      <button onClick={onClose}>Close</button>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
}

export default PopulatedCard;
