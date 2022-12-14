import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ================= REDUX =================
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

// $ Allows us to use Redux DevTools Extension
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // $ Provider is a Redux component that wraps around the App component
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ================= REDUX =================

// ***** STORE *****  -> GLOBALIZED STATE

// ***** ACTION ***** -> DESCRIBE WHAT YOU WANT TO DO


// ***** REDUCER *****  -> DESCRIBE HOW YOUR ACTION TRANSFORMS THE STATE INTO THE NEXT STATE


// ***** SUBSCRIBE *****  -> LISTEN TO CHANGES IN THE STATE


// ***** DISPATCH *****  -> EXECUTE THE CODE BASED ON THE ACTION




reportWebVitals();