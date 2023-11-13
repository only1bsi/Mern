<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6138420 (front end update)

import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statements
import CreateForm from "./component/pages/createForm/CreateForm";
import Dashboard from "./component/pages/dashboard/Dashboard";
import Notes from "./component/Notes"
import UpdateForm from "./component/pages/updateForm/UpdateForm"
import NotesContainer from "./component/NotesContainer";
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (

    <Provider store={store}>
    <div className="App">
      <Router>
        <Sidebar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register-record" element={<CreateForm />} />
          <Route path="/all-records" element={<NotesContainer />} />
          <Route path="/update-record" element={<UpdateForm />} />
        </Routes>
      </Router>
    </div>  
    </Provider>
  );
}
 

<<<<<<< HEAD
export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 632c6c2 (Initialize project using Create React App)
=======
export default App;
>>>>>>> 6138420 (front end update)
