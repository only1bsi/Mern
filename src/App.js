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

export default App;
