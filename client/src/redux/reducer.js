import { SET_PLAN, SET_USER } from "./actionsTypes";

// reducer.js
const initialState = {
  user: {
    id: '',
    UserName: '',
    Email: '',
    Phone: '',
    token: '',
    created: ''
  },
  plan: {}
};

const rootReducer = (
  state = initialState,
  { type, payload, count, error, idDelete, countClient }
) => {
  let newState;

  switch (type) {
    case SET_USER:
      newState = {
        ...state,
        user: payload
      };

      localStorage.setItem('userState', JSON.stringify(newState));

      return newState;

    case SET_PLAN:
      newState = {
        ...state,
        plan: payload
      };
      localStorage.setItem('userState', JSON.stringify(newState));
      
      return newState;

    default:
      return state;
  }
};

export default rootReducer;