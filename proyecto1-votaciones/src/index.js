import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClickButtonGood = () =>{
    let contador = 1
    contador += good
    setGood(contador) 
  }

  const onClickButtonNeutral = () =>{
    let contador = 1
    contador += neutral
    setNeutral(contador) 
  }

  const onClickButtonBad = () =>{
    let contador = 1
    contador += bad
    setBad(contador) 
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={onClickButtonGood}>good</button>
      <button onClick={onClickButtonNeutral}>neutral</button>
      <button onClick={onClickButtonBad} >bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)