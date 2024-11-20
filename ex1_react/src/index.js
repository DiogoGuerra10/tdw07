import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListaExercicios from './ListaExercicios';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <React.StrictMode>
    <ListaExercicios />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
