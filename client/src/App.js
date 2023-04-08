import { HomePage } from "./components/homepage.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;