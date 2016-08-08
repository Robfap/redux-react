import { loadState, saveState } from './../utils/localStorage.js';
import reducer from './reducer.js';
import { createStore } from 'redux';
import { throttle } from 'lodash';

const preservedState = loadState();
const store = createStore(reducer, preservedState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;

