import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import isEqual from 'lodash/isEqual';
import InputField from './InputField';
import Button from './Button';

import {
  updateFormData,
  submitForm,
  clearFormData,
  setCurrentEditingData,
  updateCardArray
} from '../redux/formActions';
import styles from './FormComponent.module.css';

function FormComponent( {cardData, isEditing, onCloseForm} ) {
  const [formKey] = useState(0);
  const dispatch = useDispatch();
  const [localFormData, setLocalFormData] = useState(cardData || {});
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
        <InputField
          label="Client's Name"
          id="clientName"
          name="clientName"
          defaultValue={cardData?.clientName}
          onChange={handleChange}
          type="text" 
        />
      </div>

      <div className={`${styles.formField} ${styles.clientEmail}`}>
        <InputField
          label="Client's Email"
          id="clientEmail"
          name="clientEmail"
          defaultValue={cardData?.clientEmail}
          onChange={handleChange}
          type="email"
        />
      </div>

      <div className={`${styles.formField} ${styles.streetAddress}`}>
        <InputField
          label="Street Address"
          id="streetAddress"
          name="streetAddress"
          defaultValue={cardData?.streetAddress}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.city}`}>
        <InputField
          label="City"
          id="city"
          name="city"
          defaultValue={cardData?.city}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.zipCode}`}>
        <InputField
          label="Zip Code"
          id="zipCode"
          name="zipCode"
          defaultValue={cardData?.zipCode}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.country}`}>
        <InputField
          label="Country"
          id="country"
          name="country"
          defaultValue={cardData?.country}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div className={`${styles.formField} ${styles.invoiceDate}`}>
        <InputField
          label="Invoice Date"
          id="invoiceDate"
          name="invoiceDate"
          defaultValue={cardData?.invoiceDate}
          onChange={handleChange}
          type="date"
        />
      </div>

      <div className={`${styles.formField} ${styles.paymentDue}`}>
        <InputField
          label="Payment Due"
          id="paymentDue"
          name="paymentDue"
          defaultValue={cardData?.paymentDue}
          onChange={handleChange}
          type="date"
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
          <InputField
            label="Item Name"
            id="itemName"
            name="itemName"
            defaultValue={cardData?.itemName}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className={`${styles.formField} ${styles.city}`}>
        <InputField
          label="Item City"
          id="itemCity"
          name="itemCity"
          defaultValue={cardData?.itemCity}
          onChange={handleChange}
          type="text"
        />
        </div>

        <div className={`${styles.formField} ${styles.price}`}>
        <InputField
          label="Price"
          id="itemPrice"
          name="itemPrice"
          defaultValue={cardData?.itemPrice}
          onChange={handleChange}
          type="text"
        />
        </div>

        <div className={`${styles.formField} ${styles.total}`}>
        <InputField
          label="Total"
          id="itemTotal"
          name="itemTotal"
          defaultValue={cardData?.itemTotal}
          onChange={handleChange}
          type="text"
        />
        </div>
      </div>

      {!isEditing && (
        <Button onClick={handleSubmit}>Add Card</Button>
      )}

      {isEditing && (
        <Button onClick={handleUpdate}>Handle Update</Button>
      )}
    </form>
  );
}

export default FormComponent;
