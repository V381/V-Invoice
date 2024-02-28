import { UPDATE_FORM_DATA, RESET_FORM_DATA } from './formActionTypes';

const initialState = {
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
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};

export default formReducer;