import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ================= REDUX =================
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ================= REDUX =================

// ***** STORE *****  -> GLOBALIZED STATE

// ***** ACTION ***** -> DESCRIBE WHAT YOU WANT TO DO
// It is a function that returns an object
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// ***** REDUCER *****  -> DESCRIBE HOW YOUR ACTION TRANSFORMS THE STATE INTO THE NEXT STATE
// It is a function that returns a new state

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store = createStore(counter);

// ***** SUBSCRIBE *****  -> LISTEN TO CHANGES IN THE STATE
store.subscribe(() => console.log(store.getState()));

// ***** DISPATCH *****  -> EXECUTE THE CODE BASED ON THE ACTION
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());



reportWebVitals();