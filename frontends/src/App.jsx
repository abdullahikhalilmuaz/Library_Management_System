import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Home from "./components/Home";
import UnidentifiedUser from "./components/UnidentifiedUser";
import Notfound from "./components/Notfound";
import Login from "./components/Login";
import styles from "./app.css";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/main" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/unidentifieduser" element={<UnidentifiedUser />} />
        <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </div>
  );
}
