import { createStore } from 'redux';
import rootReducer from './reducer';

// Obtener el estado del localStorage
const savedState = JSON.parse(localStorage.getItem('userState')) || {};

const store = createStore(rootReducer, savedState);

export default store;