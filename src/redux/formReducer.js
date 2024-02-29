import { UPDATE_FORM_DATA, SUBMIT_FORM } from './formActionTypes';

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
  isFormSubmitted: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
      case 'SUBMIT_FORM':
        return {
          ...state,
          isFormSubmitted: true,
        };
    default:
      return state;
  }
};

export default formReducer;
