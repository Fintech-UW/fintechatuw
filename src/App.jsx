import React from "react";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </HashRouter>
  );
}
