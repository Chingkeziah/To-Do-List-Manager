import React from 'react'
import Home from './Components/Pages/Home';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Todo from './Components/Pages/To-do';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/to-do" element={<to-do />} />
        </Routes>
      </Router>
    </>
  )
}

export default App