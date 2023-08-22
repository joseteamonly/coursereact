import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const ContadorVotos = ({selectedVote, selected}) => {
  let count = 0;
 
  selectedVote.forEach((num) => {
    if (num === selected) {
      count++;
    }
  });
  return (
    <div>
      <h3>Tiene {count} de votos</h3>
   </div>
  )
}

const MasVotada = ({selectedVote}) => { 
  const frecuencia = {};
  selectedVote.forEach((num) => {
    if (frecuencia[num]) {
      frecuencia[num]++;
  } else {
      frecuencia[num] = 1;
  }  
  });

  let numeroMasComun= 0;
  let maxFrecuencia = 0;

  selectedVote.forEach((num) => {
    if (frecuencia[num] > maxFrecuencia) {
      maxFrecuencia = frecuencia[num];
      numeroMasComun = num;
    }
  });

  return (
    <div>
      {anecdotes[numeroMasComun]} 
      <h3># de votos es: {maxFrecuencia}</h3>    
   </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [selectedVote, setVote] = useState([])


  const contadoClickNeutro = () => {      
    setVote(prevVotes => [...prevVotes, selected])     
  }

  

  return (
    <div>
      <Button onClick={() => setSelected(Math.floor(Math.random() * 6))} text='next anecdote' />
      <br />
      {props.anecdotes[selected]}
      <br />
      <Button onClick={contadoClickNeutro} text='vote' />
      <br />
      <ContadorVotos selectedVote ={selectedVote} selected = {selected}/>      
      <br />
      <h3>Anecdota con mas votos es:</h3>
      <MasVotada selectedVote ={selectedVote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)