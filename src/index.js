import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style.css';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

