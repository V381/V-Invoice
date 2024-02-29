import { UPDATE_FORM_DATA, SUBMIT_FORM } from './formActionTypes';

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});

export const submitForm = () => ({
  type: 'SUBMIT_FORM',
});
