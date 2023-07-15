import React from 'react'
import './App.css';
import questions from './data'
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Quotordle 2</h1>
      <h3 className='subtitle'>Guess the movie the quote is from!</h3>
      <Question questions={questions} />
    </div>
  );
}

export default App;

