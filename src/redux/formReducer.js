import {
  UPDATE_FORM_DATA,
  SUBMIT_FORM,
  RESET_FORM_DATA,
  CLEAR_FORM_DATA,
  SET_CURRENT_EDITING_DATA,
  REMOVE_CARD,
  CLEAR_CURRENT_EDITING_DATA,
  UPDATE_CARD_ARRAY
} from './formActionTypes';

const initialState = {
  formData: {
    id: 0,
    clientName: '',
    clientEmail: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    country: '',
    invoiceDate: '',
    paymentDue: '',
    paymentTerms: 'net-30',
    productDescription: '',
    itemName: '',
    itemCity: '',
    itemPrice: '',
    itemTotal: '',
  },
  formDataArray: [],
  isFormSubmitted: false,
  currentEditingData: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...state.currentEditingData,
          ...action.payload,
        },
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: { ...initialState.formData, id: state.formData.id },
      };
    case CLEAR_FORM_DATA:
      return {
        ...state,
        formData: {
          client: '',
          id: state.formData.id,
        },
      };
    case SET_CURRENT_EDITING_DATA:
      return {
        ...state,
        currentEditingData: action.payload,
      };
    case CLEAR_CURRENT_EDITING_DATA:
      return {
        ...state,
        currentEditingData: null,
      };
    case REMOVE_CARD:
      const { cardId } = action.payload;
      return {
        ...state,
        formDataArray: state.formDataArray.filter((card) => card.id !== cardId),
      };
    case SUBMIT_FORM:
      return {
        ...state,
        formDataArray: [...state.formDataArray, { ...state.formData, id: state.formData.id + 1 }],
        isFormSubmitted: true,
        formData: { ...initialState.formData, id: state.formData.id + 1 },
      };
      case UPDATE_CARD_ARRAY:
        const updatedArray = state.formDataArray.map((item) => {
          if (item.id === state.currentEditingData.id) {
            return { ...item, ...action.payload }; 
          }
          return item;
        });
  return {
    ...state,
    formDataArray: updatedArray,
  };
    default:
      return state;
  }
};

export default formReducer;
