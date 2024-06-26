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
        {props.part} {props.exercises}
      </p>,
      <p>
        {props.part2} {props.exercises2}
      </p>,
      <p>
        {props.part3} {props.exercises3}
      </p>,
    ]
  )
}

const Total = (props) => {
  return (
    [
      <p>Number of exercises {props.exercises + props.exercises2 + props.exercises3}</p>
    ]
  )

}

const App = () => {
  const courses = 'Half Stack application development in main'
  const part = 'Fundamentals of React rama g'
  const exercises = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 75
  const part3 = 'State of a component in main'
  const exercises3 = 14
  
  return (
    <>
      <h1>Greetings</h1>
      <Header course={courses} />
      <Content part={part} exercises={exercises} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises={exercises} exercises2={exercises2} exercises3={exercises3} />
    </>
  )

}

ReactDOM.render(<App />, document.getElementById('root')) 