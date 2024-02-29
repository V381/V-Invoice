import { UPDATE_FORM_DATA, SUBMIT_FORM, RESET_FORM_DATA, CLEAR_FORM_DATA } from './formActionTypes';

const initialState = {
  formData: {
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
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      console.log(state.formData);
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: initialState.formData,
      };
      case CLEAR_FORM_DATA:
        return {
          ...state,
          formData: {
            client: "?"
          },
        };
      case SUBMIT_FORM:
        return {
          ...state,
          formDataArray: [...state.formDataArray, state.formData],
          isFormSubmitted: true,
          formData: initialState.formData
        };   
    default:
      return state;
  }
};

export default formReducer;