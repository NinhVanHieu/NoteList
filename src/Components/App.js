import React from "react";
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <h2>Feature</h2>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path='/edit' element={<Edit/>} />
      </Routes>
    </Router>
  );
}
export default App;
