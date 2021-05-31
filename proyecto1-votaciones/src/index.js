import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Components/StatisticsComponent'
import Buttons from './Components/ButtonsComponent'

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
  const YesStatistics = () => {
    return  <Statistics good={good} neutral={neutral} bad={bad} all={all} porcentaje={Porcentaje()} promedio={Promedio()} />
  }
  const NoFeedback = () => {
    return <p>No feedback given</p>
  }
  

  return(
    <div>
      <h1>give feedback</h1>
      <Buttons onClickButtonGood={onClickButtonGood} onClickButtonNeutral={onClickButtonNeutral} onClickButtonBad={onClickButtonBad}></Buttons>
      <h1>statistics</h1>
      {good !== 0 || bad !== 0 || neutral !== 0 ? YesStatistics() : NoFeedback()}
    </div>
  )
    
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)