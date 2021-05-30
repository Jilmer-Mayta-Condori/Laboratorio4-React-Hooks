import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const onClickButtonGood = () =>{
    setGood(good+1)
    setAll(all+1)
    setAverage(average+1)
  }

  const onClickButtonNeutral = () =>{
    setNeutral(neutral+1) 
    setAll(all+1) 
  }

  const onClickButtonBad = () =>{
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-1)
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
      <p>all {all}</p>
      { average === 0 ? <p>average {average}</p> : <p>average {average/all}</p>}
      { good === 0 ? <p>positive {good}%</p> : <p>positive {(good*100)/all}%</p>}

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)