import { LOG_OUT, SET_NODES, SET_PLAN, SET_USER } from "./actionsTypes";

const initialState = {
  user: {
    id: '',
    UserName: '',
    Email: '',
    Phone: '',
    token: '',
    created: ''
  },
  plan: {},
  nodes: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
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

    case SET_NODES:
      newState = {
        ...state,
        nodes: payload
      };
      localStorage.setItem('userState', JSON.stringify(newState));
      return newState;

    case LOG_OUT:
      localStorage.removeItem('userState'); // Eliminar el estado del localStorage
      return initialState; // Restablecer el estado inicial

    default:
      return state;
  }
};

export default rootReducer;