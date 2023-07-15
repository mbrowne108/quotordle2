import React, { useEffect, useState } from 'react'

export default function Question({ questions }) {
    const [hintCount, setHintCount] = useState(0);
    const [movieGuess, setMovieGuess] = useState('')
    const [afterGuess, setAfterGuess] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const [quote, setQuote] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {
        setQuote(questions[Math.floor(Math.random() * questions.length)])
    }, [])

    function hintClick(e) {
        hintCount === 3 ? setHintCount(3) : setHintCount(() => hintCount + 1)
    }

    function handleChange(e) {
        setMovieGuess(e.target.value)
    }

    function formSubmit(e) {
        e.preventDefault()
        const answers = quote.title.map((t) => t.toLowerCase())
        setAfterGuess(true)

        if (answers.includes(movieGuess.toLowerCase())) {
            setCorrectAnswer(true)
            setScore(score + (1000 - hintCount * 250))
        }
    }

    function nextQuestion() {
        setAfterGuess(false)
        setCorrectAnswer(false)
        setHintCount(0)
        setMovieGuess('')
        setQuote(questions[Math.floor(Math.random() * questions.length)])
    }

    return (
        <div>
            <h4>Score: {score}</h4>
            <div className='question'>
                {!afterGuess ?
                    <div>
                        <p className='quote'>{quote.quote}</p>
                        <p className='hint'>{hintCount >= 1 ? `Year: ${quote.year}` : null}</p>
                        <p className='hint'>{hintCount >= 2 ? `Character: ${quote.character}` : null}</p>
                        <p className='hint'>{hintCount >= 3 ? `Actor: ${quote.actor}` : null}</p>
                        {hintCount < 3 ? <button className='hint-button' onClick={hintClick}>Get a Hint</button>: null}
                        <form onSubmit={formSubmit}>
                            <div>
                                <input className='input' type="text" name="movie" value={movieGuess} onChange={handleChange}></input>
                            </div>
                            <div>
                                <button className='guess-button' type="submit">Guess</button>
                            </div>
                        </form>
                    </div> : null
                }
                {afterGuess ? 
                    <div>
                        <p className={correctAnswer ? 'result-correct' : 'result-incorrect'}>{correctAnswer ? `${quote.title[0]} is correct!` : `Incorrect. The correct answer was ${quote.title[0]}.`}</p>
                        <button className='next-button' onClick={nextQuestion}>Play again!</button>
                    </div> : null 
                }
            </div>
        </div>
    )
}
