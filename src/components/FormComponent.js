import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';

import {
  updateFormData,
  submitForm,
  clearFormData,
  setCurrentEditingData,
  updateCardArray
} from '../redux/formActions';
import styles from './FormComponent.module.css';

function FormComponent( {cardData, isEditing, onCloseForm} ) {
  const [formKey, setFormKey] = useState(0);
  const dispatch = useDispatch();
  const [localFormData, setLocalFormData] = useState(cardData || {});
  const [selectedCard, setSelectedCard] = useState(null);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (cardData && isEditing) {
      dispatch(setCurrentEditingData(cardData));
      dispatch(updateFormData({ ...cardData }));
      setLocalFormData(cardData);
    }
  }, [cardData, dispatch, isEditing]);

  useEffect(() => {
    if (isEditing) {
      dispatch(setCurrentEditingData(localFormData));
    }
  }, [isEditing, localFormData, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateFormData({ ...localFormData }));
      dispatch(submitForm());
      dispatch(clearFormData());
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setCurrentEditingData({ ...localFormData }));
      dispatch(updateFormData({ ...localFormData }));
      dispatch(updateCardArray({ ...localFormData }));
      onCloseForm();
    }
  };

  const validateForm = () => {
    const fieldsToValidate = [
      'clientName',
      'clientEmail',
      'streetAddress',
      'city',
      'zipCode',
      'country',
      'invoiceDate',
      'paymentDue',
      'paymentTerms',
      'productDescription',
      'itemName',
      'itemCity',
      'itemPrice',
      'itemTotal',
    ];

    for (const fieldName of fieldsToValidate) {
      if (!localFormData[fieldName]) {
        setFormError(`Please fill in the ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }

    setFormError(null);
    return true;
  };

  useEffect(() => {
    if (cardData && isEditing) {
      dispatch(setCurrentEditingData(cardData));
      dispatch(updateFormData({ ...cardData }));
      setLocalFormData(cardData);
    }
  }, [cardData, dispatch, isEditing]);

  useEffect(() => {
    if (isEditing) {
      dispatch(setCurrentEditingData(localFormData));
    }
  }, [isEditing, localFormData, dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...localFormData, [name]: value };

    if (!isEqual(updatedFormData, localFormData)) {
      setLocalFormData(updatedFormData);
      dispatch(updateFormData(updatedFormData));
      dispatch(setCurrentEditingData(updatedFormData));
    }
  };

  
  
  return (
    <form className={styles.form} key={formKey}>
      {formError && <p className={styles.error}>{formError}</p>}

      <div className={`${styles.formField} ${styles.clientName}`}>
        <label className={styles.label} htmlFor="clientName">
          Client's Name:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="clientName"
          name="clientName"
          defaultValue={cardData?.clientName}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.clientEmail}`}>
        <label className={styles.label} htmlFor="clientEmail">
          Client's Email:
        </label>
        <input
          className={styles.inputField}
          type="email"
          id="clientEmail"
          name="clientEmail"
          defaultValue={cardData?.clientEmail}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.streetAddress}`}>
        <label className={styles.label} htmlFor="streetAddress">
          Street Address:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="streetAddress"
          name="streetAddress"
          defaultValue={cardData?.streetAddress}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.city}`}>
        <label className={styles.label} htmlFor="city">
          City:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="city"
          name="city"
          defaultValue={cardData?.city}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.zipCode}`}>
        <label className={styles.label} htmlFor="zipCode">
          Zip Code:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="zipCode"
          name="zipCode"
          defaultValue={cardData?.zipCode}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.country}`}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="country"
          name="country"
          defaultValue={cardData?.country}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.invoiceDate}`}>
        <label className={styles.label} htmlFor="invoiceDate">
          Invoice Date:
        </label>
        <input
          className={styles.inputField}
          type="date"
          id="invoiceDate"
          name="invoiceDate"
          defaultValue={cardData?.invoiceDate}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.paymentDue}`}>
        <label className={styles.label} htmlFor="paymentDue">
          Payment Due:
        </label>
        <input
          className={styles.inputField}
          type="date"
          id="paymentDue"
          name="paymentDue"
          defaultValue={cardData?.paymentDue}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.paymentTerms}`}>
  <label className={styles.label} htmlFor="paymentTerms">
    Payment Terms:
  </label>
  <select
    className={`${styles.inputField} ${styles.selectField}`} 
    id="paymentTerms"
    name="paymentTerms"
    defaultValue={cardData?.paymentTerms}
    onChange={handleChange}
  >
    <option value="net-30">Net 30</option>
    <option value="net-60">Net 60</option>
    <option value="net-90">Net 90</option>
  </select>
</div>

<div className={`${styles.formField} ${styles.productDescription}`}>
  <label className={styles.label} htmlFor="productDescription">
    Product Descriptions:
  </label>
  <select
    className={`${styles.inputField} ${styles.selectField}`} 
    id="productDescription"
    name="productDescription"
    defaultValue={cardData?.productDescription}
    onChange={handleChange}
  >
    <option value="product-1">Front End</option>
    <option value="product-2">Back End</option>
    <option value="product-3">UI/UX</option>
    <option value="product-4">Project Management</option>
  </select>
</div>


      <div className={styles.row}>
        <div className={`${styles.formField} ${styles.itemName}`}>
          <label className={styles.label} htmlFor="itemName">
            Item Name:
          </label>
          <input
            className={`${styles.inputField} ${styles.itemName}`}
            type="text"
            id="itemName"
            name="itemName"
            defaultValue={cardData?.itemName}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formField} ${styles.city}`}>
          <label className={styles.label} htmlFor="itemCity">
            City:
          </label>
          <input
            className={`${styles.inputField} ${styles.city}`}
            type="text"
            id="itemCity"
            name="itemCity"
            defaultValue={cardData?.itemCity} 
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formField} ${styles.price}`}>
          <label className={styles.label} htmlFor="price">
            Price:
          </label>
          <input
            className={`${styles.inputField} ${styles.price}`}
            type="text"
            id="itemPrice"
            name="itemPrice"
            defaultValue={cardData?.itemPrice}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formField} ${styles.total}`}>
          <label className={styles.label} htmlFor="total">
            Total:
          </label>
          <input
            className={`${styles.inputField} ${styles.total}`}
            type="text"
            id="itemTotal"
            name="itemTotal"
            defaultValue={cardData?.itemTotal}
            onChange={handleChange}
          />
        </div>
      </div>

      {!isEditing && (
        <button className={styles.button} onClick={handleSubmit}>
          Add Card
        </button>
      )}

      {isEditing && (
        <button className={styles.button} onClick={handleUpdate}>
          Update
        </button>
      )}
    </form>
  );
}

export default FormComponent;
