import { CLEAR_FORM_DATA, UPDATE_FORM_DATA, SUBMIT_FORM, RESET_FORM_DATA } from './formActionTypes';

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});

export const clearFormData = () => ({
  type: CLEAR_FORM_DATA,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});
