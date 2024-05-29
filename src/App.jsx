import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./frontend/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./frontend/Home";
import Uploads from "./frontend/Uploads";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/home" element={<Home />}></Route>

        <Route path="/uploads" element={<Uploads />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
