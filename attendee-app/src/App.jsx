import React from "react";
import "./App.css";
import { Attendee } from "./Components/Attendee/Attendee";
import { Login } from "./Components/Login/Login";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Attendee />} />
      </Routes>
    </div>
  );
}

export default App;
