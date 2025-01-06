import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Board from "./components/Board/Board.tsx";
import EditIssue from "./components/EditIssue/EditIssue.tsx";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
type Props = {};
const App = (props: Props) => {
  return <div className="App">
   
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/EditIssue/:id/:defstatus" element={<EditIssue />} />
          <Route path="/EditIssue/:id/" element={<EditIssue />} />
        </Routes>
      </div>
    </Router>
  </div>;
};

export default App;
