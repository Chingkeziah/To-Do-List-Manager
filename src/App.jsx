import React from 'react'
import Home from './Components/Pages/Home';
import Todo from './Components/Pages/Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App