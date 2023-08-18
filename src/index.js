import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ bueno, neutral, malo, total }) => {
  if (total === 0) {
    return (
      <div>
        <h3>no hay estadisticas para mostrar</h3>
      </div>
    )
  } else {
    const porcentaje = (bueno / total) * 100
    const promedio = (total / 3)
    return (
      <div>
        <table>
        <tr>
          <td colspan="2" align="left"><h1>statistics</h1></td>
        </tr>
        <tr>
          <td><h3>bueno:</h3></td>
          <td><h3>{bueno}</h3></td>          
        </tr>
        <tr>
          <td><h3>neutral: </h3> </td>
          <td><h3>{neutral}</h3></td>         
        </tr>
        <tr>         
          <td><h3>malo: </h3></td>
          <td><h3>{malo}</h3></td>        
        </tr>
        <tr>
          <td><h3>total: </h3> </td>        
          <td><h3>{total}</h3></td>
        </tr>
        <tr>
          <td><h3>promedio: </h3> </td>        
          <td><h3>{promedio}</h3></td>
        </tr>
        <tr>
          <td><h3>porcentaje: </h3> </td>        
          <td><h3>{porcentaje} %</h3></td>
        </tr>
      </table>              
      </div>
    )
  }
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
      <table>
        <tr>
          <td colspan="3" align="center"><h1>give feedback</h1></td>
        </tr>
        <tr>
          <td><Button onClick={contadorClickBueno} text='bueno' /></td>
          <td><Button onClick={contadoClickNeutro} text='neutro' /></td>
          <td><Button onClick={contadorClickMalo} text='malo' /></td>
        </tr>
      </table>      
      <br />   
      
      <Statistics bueno={bueno} neutral={neutral} malo={malo} total={total} />

      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)