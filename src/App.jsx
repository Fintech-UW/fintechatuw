import React from "react";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </HashRouter>
  );
}
