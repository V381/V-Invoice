import { 
  CLEAR_FORM_DATA, 
  UPDATE_FORM_DATA, 
  SUBMIT_FORM, 
  RESET_FORM_DATA, 
  SET_CURRENT_EDITING_DATA,
  CLEAR_CURRENT_EDITING_DATA, 
  UPDATE_CARD_ARRAY,
  REMOVE_CARD } from './formActionTypes';

export const updateFormData = (data) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: data,
  };
};

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});

export const clearFormData = () => ({
  type: CLEAR_FORM_DATA,
});

export const submitForm = (payload) => {
  return {
    type: SUBMIT_FORM,
    payload: payload,
  }
};

export const setCurrentEditingData = (data) => {
  return {
    type: SET_CURRENT_EDITING_DATA,
    payload: data,
  };
};

export const clearCurrentEditingData = () => {
  return {
    type: CLEAR_CURRENT_EDITING_DATA,
  };
};

export const updateCardArray = (updatedData) => ({
  type: UPDATE_CARD_ARRAY,
  payload: updatedData,
});

export const removeCardAction = (cardId) => ({
  type: REMOVE_CARD,
  payload: { cardId },
});