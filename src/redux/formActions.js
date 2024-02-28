import { UPDATE_FORM_DATA, RESET_FORM_DATA } from './formActionTypes';

export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});