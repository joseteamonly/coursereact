import React from 'react'

const Total = ({parts}) => {
    const initialValue = 0;
    const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue);

    return (
      [
        <div>
            <p>Number of exercises {sum}</p>
        </div>
      ]  
    )
  }

export default Total