// reducer.js
const initialState = {
    user: {
      id: '',
      UserName:'' ,
      Email: '',
      Phone:'',
      token: '',
      created:''
    }
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user:action.payload
        };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;