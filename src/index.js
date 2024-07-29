import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { LanguageProvider } from '../src/Context/LanguageContext';



const root = ReactDOM.createRoot(document.getElementById('root'));  




root.render(
  <React.StrictMode>
   <LanguageProvider>
     <App />
   </LanguageProvider>
  </React.StrictMode>
);

