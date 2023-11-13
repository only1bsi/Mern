import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import App from './App';
import axios from 'axios';

 
axios.defaults.baseURL = "http://localhost:5000"
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 632c6c2 (Initialize project using Create React App)
=======
import App from './component/App';
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:5000"
>>>>>>> e369d7f (first commit)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
<<<<<<< HEAD

=======
reportWebVitals();
>>>>>>> 632c6c2 (Initialize project using Create React App)
=======

>>>>>>> e369d7f (first commit)
