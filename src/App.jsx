import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./frontend/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./frontend/Home";
import Uploads from "./frontend/Uploads";
import Channels from "./frontend/Channels";
import Logs from "./frontend/Logs";
import Bin from "./frontend/Bin";
import Settings from "./frontend/Settings";
import Starred from "./frontend/Starred";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/home" element={<Home />}></Route>

        <Route path="/uploads" element={<Uploads />}></Route>
        <Route path="/channels" element={<Channels />}></Route>
        <Route path="/logs" element={<Logs />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="/bin" element={<Bin />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
