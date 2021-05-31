import React from 'react'

const Statistics = ({text, value}) =>{
    return(
        <div>
            {text === "positive" ? <p>{text} {value}%</p> : <p>{text} {value}</p>}
        </div>
        
    )
}

export default Statistics