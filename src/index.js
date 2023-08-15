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
        {props.part.name} {props.part.exercises}
      </p>,
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>,
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>,
    ]
  )
}

const Total = (props) => {
  return (
    [
      <p>Number of exercises {props.exercises.exercises + props.exercises2.exercises + props.exercises3.exercises}</p>
    ]

  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <>
      <h1>Greetings</h1>
      <Header course={course} />
      <Content part={part1} part2={part2} part3={part3} />
      <Total exercises={part1} exercises2={part2} exercises3={part3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 