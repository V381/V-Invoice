import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, submitForm } from '../redux/formActions';
import styles from './FormComponent.module.css';

function FormComponent() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm()); 
  };

  return (
    <form className={styles.form}>
      <div className={`${styles.formField} ${styles.clientName}`}>
        <label className={styles.label} htmlFor="clientName">
          Client's Name:
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="clientName"
          name="clientName"
          value={formData.clientName}
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
          value={formData.clientEmail}
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
          value={formData.streetAddress}
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
          value={formData.city}
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
          value={formData.zipCode}
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
          value={formData.country}
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
          value={formData.invoiceDate}
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
          value={formData.paymentDue}
          onChange={handleChange}
        />
      </div>

      <div className={`${styles.formField} ${styles.paymentTerms}`}>
        <label className={styles.label} htmlFor="paymentTerms">
          Payment Terms:
        </label>
        <select
          className={styles.inputField}
          id="paymentTerms"
          name="paymentTerms"
          value={formData.paymentTerms}
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
          className={styles.inputField}
          id="productDescription"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
        >
          <option value="product-1">Product 1</option>
          <option value="product-2">Product 2</option>
          <option value="product-3">Product 3</option>
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
            value={formData.itemName}
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
            id="city"
            name="city"
            value={formData.itemCity} 
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
            id="price"
            name="price"
            value={formData.itemPrice}
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
            id="total"
            name="total"
            value={formData.total}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
