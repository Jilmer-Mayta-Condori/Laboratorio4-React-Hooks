import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Components/StatisticsComponent'

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

  const Promedio = () =>{
    return (good*100)/all
  }

  const Porcentaje = () =>{
    return average/all
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={onClickButtonGood}>good</button>
      <button onClick={onClickButtonNeutral}>neutral</button>
      <button onClick={onClickButtonBad} >bad</button>
      <h1>statistics</h1>
      <Statistics name="good" value={good}/>
      <Statistics name="neutral" value={neutral}/>
      <Statistics name="bad" value={bad}/>
      <Statistics name="all" value={all}/>
      <Statistics name="average" value={Porcentaje()}/>
      <Statistics name="positive" value={Promedio()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)