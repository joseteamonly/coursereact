import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Course/Header'
import Content from './Course/Content'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Test',
        exercises: 5,
        id: 4
      }
    ]
  }
  return (
    <>
      <h1>Greetings</h1>
      <Header course={course} />
      <Content key={course.id} course={course} />      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 