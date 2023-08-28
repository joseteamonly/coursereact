import React from 'react'

const Total = ({parts}) => {
    const initialValue = 0;
    const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue);

    return (
       
        <p>Number of exercises {sum}</p>
  
    )
  }

export default Total