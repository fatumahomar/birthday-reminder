import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Birthday from "./components/Birthday";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
};

export default App;
