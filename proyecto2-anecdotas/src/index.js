import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [anecdotas, setAnecdotas] = useState(anecdotes)
  const [selected, setSelected] = useState(0)

  const onClickButtonNext = () =>{
    setSelected(Math.floor(Math.random() * (6 - 0)) + 0)
  }

  const onClickButtonVotar = () => {
    let votos = anecdotas
    const nuevoVoto = {
      votos: (anecdotas[selected].votos+1), 
      anecdota: anecdotas[selected].anecdota
    }
    anecdotas.splice(selected,1, nuevoVoto)
    setAnecdotas([...anecdotas])
  }

  return (
    <div>
      <h1>Anecdotas</h1>
      <p>{anecdotas[selected].anecdota}</p>
      <p>Votes: {anecdotas[selected].votos}</p>
      <button onClick={onClickButtonVotar}>votar</button>
      <button onClick={onClickButtonNext}>next anecdote</button>      
    </div>
  )
}

const anecdotes = [
  { votos: 0,
    anecdota: 'If it hurts, do it more often'},
  { votos: 0,
    anecdota: 'Adding manpower to a late software project makes it later!'},
  { votos: 0,
    anecdota: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'},
  { votos: 0,
    anecdota: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
  { votos: 0,
    anecdota: 'Premature optimization is the root of all evil.'},
  { votos: 0,
    anecdota: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'}
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

