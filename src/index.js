import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Porcentaje = ({bueno, total}) => {
  const porcentaje = (bueno / total) * 100
  
  return  <h3>positivo: {porcentaje || 0} % </h3>
}

const Promedio = ({total}) => {
  const promedio = (total / 3)
  
  return  <h3>promedio: {promedio || 0}</h3>
}

const App = () => {
  const [bueno, setBueno] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [malo, setMalo] = useState(0)
  const [total, setTotal] = useState(0)
 
  const contadorClickBueno = () => {   
    setBueno(bueno + 1)
    setTotal(total + 1)
  }

  const contadoClickNeutro = () => {       
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const contadorClickMalo = () => {
    setMalo(malo + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>         
      <Button onClick={contadorClickBueno} text='bueno' />
      <Button onClick={contadoClickNeutro} text='neutro' />   
      <Button onClick={contadorClickMalo} text='malo' />     
      <br />
      <br />
      <h1>statistics</h1>
      <br />
      <h3>bueno: {bueno}</h3>
     
     <br />
     <h3>neutral: {neutral}</h3>
     
     <br />
     <h3>malo: {malo} </h3>
      
     <br />
     <h3>todos: {total} </h3>
     <Promedio total={total} />
     <Porcentaje bueno={bueno} total={total} />
     </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)