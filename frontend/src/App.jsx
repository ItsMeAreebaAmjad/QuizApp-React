import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage';
import StartQuizz from './Pages/StartQuizz';
import SelectSubject from './Pages/SelectSubject';
import { Quizz } from './Pages/Quizz';
import Score from './Pages/Score';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-subject" element={<SelectSubject />} />
          <Route path="/quiz/:subject" element={<Quizz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
