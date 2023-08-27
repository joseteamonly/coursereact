import React from 'react'
import Parts from './Parts'

const Content = ({course}) => {
    return (
        [
            <div>
                <ul>
                {course.parts.map(part => (
                    <Parts key={part.id} part={part} />
                ))}
               </ul>
                
            </div>
        ]
    )
}

export default Content