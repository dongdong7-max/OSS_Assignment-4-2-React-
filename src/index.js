import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');
const myElement2 = <h1 style={{color:'red'}}>This is HTML tags!!</h1>;
const myElement3 = <h1>5 + 5 = {5 + 5}</h1>;
const myElement4 = (
  <ul>
    <li>apple</li>
    <li>banana</li>
    <li>orange</li>
  </ul>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
//  <>
//  {myElement1}
//  {myElement2}
//  {myElement3}
//  {myElement4}
//  </>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
