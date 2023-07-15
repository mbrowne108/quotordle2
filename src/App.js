import React from 'react'
import './App.css';
import questions from './data'
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h1>Quotordle 2</h1>
      <Question questions={questions} />
    </div>
  );
}

export default App;

