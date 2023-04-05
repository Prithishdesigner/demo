import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import Radio from './radio';

// import Example from './hookconcept'

// import DropdownExample from './dropdown';

import reportWebVitals from './reportWebVitals';

import Bankdemo from './bankdemo';

import LoanCalculator from './termloans';

// import DropdownEMI from './cashcredit'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
   {/* <DropdownExample/> */}
    {/* <Example/> */}
   {/* <Radio/> */}
   <Bankdemo/>
   <LoanCalculator/>
   {/* <DropdownEMI/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
