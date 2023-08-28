import React from 'react'
import Parts from './Parts'

const Content = ({course}) => {   
    return (
        [
            
                course.parts.map(part => (
                    <div key={part.id}>
                        <Parts part={part} />
                    </div>
                ))
           
        ]
    )
}

export default Content