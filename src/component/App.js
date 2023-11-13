import NotePage from "./pages/NotePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./RequireAuth";



function App() {

return (
  <div className="App">
  <BrowserRouter>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Login">Login</Link>
    </li>
  </ul>
  <Routes>
    <Route index element={<RequireAuth><NotePage /></RequireAuth>}/>
    <Route path="/Login" element={<LoginPage />}/>
  </Routes>
  </BrowserRouter>
  </div>
)

}

export default App;