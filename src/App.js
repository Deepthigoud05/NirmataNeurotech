import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import About from "./components/About";
import UserJourney from "./components/UserJourney";
import Benefits from "./components/Benefits";
import NextSteps from "./components/NextSteps";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/solution" element={<About />} />
        <Route path="/userjourney" element={<UserJourney />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/nextsteps" element={<NextSteps />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;





