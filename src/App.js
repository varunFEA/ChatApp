import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Registration from "./Pages/Registration";

import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
