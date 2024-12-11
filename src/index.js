import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client';
const socket = io('http://localhost:3001', {
  auth: {
    token:"123",
    useName: "1234"
  }
})
/* const Header = (props) => {
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

}*/

const App = () => {
  /*const courses = 'Half Stack application development in main'
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
  )*/
 /*useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, []);

  return (
    <div>
      <h1>Socket.io Client</h1>
    </div>
  );*/
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Escuchar mensajes del servidor
    socket.on('messageFromServer', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Limpiar el listener cuando el componente se desmonte
      socket.off('messageFromServer');
    };
  }, []);
  const sendMessage = () => {
    socket.emit('messageFromClient', 'Hello, front!');
  };

  return (
    <div>
      <h1>Socket.io Client</h1>
      <button onClick={sendMessage}>Send Message</button>
      <h2>Messages from server:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')) 