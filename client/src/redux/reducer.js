/* eslint-disable no-case-declarations */
import { SET_USER } from "./actionsTypes";

// reducer.js
const initialState = {
  user: {
    id: '',
    UserName: '',
    Email: '',
    Phone: '',
    token: '',
    created: ''
  }
};
const rootReducer = (
  state = initialState,
  { type, payload, count, error, idDelete, countClient }
) => {
  switch (type) {
    case SET_USER:
      const newState = {
        ...state,
        user: payload
      };

      localStorage.setItem('userState', JSON.stringify(newState));

      return newState;

    default:
      return state;
  }
};

export default rootReducer;
