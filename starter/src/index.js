import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

const AppRouting = () => (
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route path="/search" element={<SearchPage />} />
  </Routes>
);

ReactDOM.render(
  <Router>
    <AppRouting />
  </Router>,
  document.getElementById("root")
);
