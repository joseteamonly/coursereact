import React from 'react'

const Header = (props) => {
    return (
      <div>
        <p>{props.course.name}</p>
      </div>
    )
  }

export default Header