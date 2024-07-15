import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeartAnimation from './components/HeartAnimation';
import Reasons from './components/Reasons';
import TodoWrapper from './components/TodoWrapper';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeartAnimation />
        <Routes>
          <Route path="/" element={<Reasons />} />
          <Route path="/todowrapper" element={<TodoWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
