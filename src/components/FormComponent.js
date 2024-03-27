import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';
import Button from './Button';
import FormField from './FormField';
import {
  updateFormData,
  submitForm,
  clearFormData,
  setCurrentEditingData,
  updateCardArray,
} from '../redux/formActions';
import styles from './FormComponent.module.css';

function FormComponent({ cardData = {}, isEditing, onCloseForm }) {
  const dispatch = useDispatch();
  const currentEditingData = useSelector(state => state.formData.currentEditingData);
  const [localFormData, setLocalFormData] = useState({
    id: cardData?.id,
    clientName: cardData?.clientName,
    clientEmail: cardData?.clientEmail || '',
    streetAddress: cardData?.streetAddress || '',
    city: cardData?.city || '',
    zipCode: cardData?.zipCode || '',
    country: cardData?.country || '',
    invoiceDate: cardData?.invoiceDate || '',
    paymentDue: cardData?.paymentDue || '',
    paymentTerms: cardData?.paymentTerms || '',
    productDescription: cardData?.productDescription || '',
    itemName: cardData?.itemName || '',
    itemCity: cardData?.itemCity || '',
    itemPrice: cardData?.itemPrice || '',
    itemTotal: cardData?.itemTotal || '',
  });
  const [formError, setFormError] = useState('');
  const prevCardDataRef = useRef();
  useEffect(() => {
    if (!isEqual(prevCardDataRef.current, cardData)) {
    setLocalFormData({
      id: cardData?.id,
      clientName: cardData?.clientName || '',
      clientEmail: cardData?.clientEmail || '',
      streetAddress: cardData?.streetAddress || '',
      city: cardData?.city || '',
      zipCode: cardData?.zipCode || '',
      country: cardData?.country || '',
      invoiceDate: cardData?.invoiceDate || '',
      paymentDue: cardData?.paymentDue || '',
      paymentTerms: cardData?.paymentTerms || '',
      productDescription: cardData?.productDescription || '',
      itemName: cardData?.itemName || '',
      itemCity: cardData?.itemCity || '',
      itemPrice: cardData?.itemPrice || '',
      itemTotal: cardData?.itemTotal || '',
    });
    prevCardDataRef.current = cardData;
  }
  }, [cardData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormError('');
  };

  const validateForm = () => {
    const fieldsToValidate = [
      'clientName', 'clientEmail', 'streetAddress', 'city', 
      'zipCode', 'country', 'invoiceDate', 'paymentDue', 
      'paymentTerms', 'productDescription', 'itemName', 
      'itemCity', 'itemPrice', 'itemTotal',
    ];
    
    for (const fieldName of fieldsToValidate) {
      if (!localFormData[fieldName]) {
        setFormError(`Please fill in the ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(submitForm({ ...localFormData }));
      dispatch(clearFormData())
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

  const formFields = [
    { type: 'text', label: "Client's Name", id: 'clientName', name: 'clientName', value: cardData?.clientName || '' },
    { type: 'email', label: "Client's Email", id: 'clientEmail', name: 'clientEmail', value: cardData?.clientEmail || '' },
    { type: 'text', label: 'Street Address', id: 'streetAddress', name: 'streetAddress', value: cardData?.streetAddress || '' },
    { type: 'text', label: 'City', id: 'city', name: 'city', value: cardData?.city || '' },
    { type: 'text', label: 'Zip Code', id: 'zipCode', name: 'zipCode', value: cardData?.zipCode || '' },
    { type: 'text', label: 'Country', id: 'country', name: 'country', value: cardData?.country || '' },
    { type: 'date', label: 'Invoice Date', id: 'invoiceDate', name: 'invoiceDate', value: cardData?.invoiceDate || '' },
    { type: 'date', label: 'Payment Due', id: 'paymentDue', name: 'paymentDue', value: cardData?.paymentDue || '' },
    {
      type: 'select',
      label: 'Payment Terms',
      id: 'paymentTerms',
      name: 'paymentTerms',
      value: cardData?.paymentTerms || '',
      options: [
        { value: 'net-30', label: 'Net 30' },
        { value: 'net-60', label: 'Net 60' },
        { value: 'net-90', label: 'Net 90' },
      ]
    },
    {
      type: 'select',
      label: 'Product Description',
      id: 'productDescription',
      name: 'productDescription',
      value: cardData?.productDescription || '',
      options: [
        { value: 'product-1', label: 'Front End' },
        { value: 'product-2', label: 'Back End' },
        { value: 'product-3', label: 'UI/UX' },
        { value: 'product-4', label: 'Project Management' },
      ]
    },
    { type: 'text', label: 'Item Name', id: 'itemName', name: 'itemName', value: cardData?.itemName || '' },
    { type: 'text', label: 'Item City', id: 'itemCity', name: 'itemCity', value: cardData?.itemCity || '' },
    { type: 'text', label: 'Price', id: 'itemPrice', name: 'itemPrice', value: cardData?.itemPrice || '' },
    { type: 'text', label: 'Total', id: 'itemTotal', name: 'itemTotal', value: cardData?.itemTotal || '' },
  ].map(field => ({ ...field, value: localFormData[field?.name] || '' }));

  return (
    <form className={styles.form} onSubmit={isEditing ? handleUpdate : handleSubmit}>
        {formError && <p className={styles.error}>{formError}</p>}
        {formFields.map((field, index) => (
            <FormField
                key={index}
                type={field.type}
                label={field.label}
                id={field.id}
                name={field.name}
                value={field.value}
                onChange={handleChange}
                options={field.type === 'select' ? field.options : undefined}
            />
        ))}
        <Button type="submit">{isEditing ? 'Update Card' : 'Add Card'}</Button>
    </form>
);
        }


export default FormComponent;
