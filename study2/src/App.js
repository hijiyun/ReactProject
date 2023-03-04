import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/home"
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
