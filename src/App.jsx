import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/blog/:id" Component={Blog} />
    </Routes>
  </div>
);

export default App;
