import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    [
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>,
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>,
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>,
    ]
  )
}

const Total = (props) => {
  console.log(props)
  return (
    [
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    ]

  )
}

const App = () => {
  const courses = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
      <h1>Greetings</h1>
      <Header course={courses} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 