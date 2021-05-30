import React from 'react'

const Statistics = (props) =>{
    return(
        <div>
            {props.name === "positive" ? <p>{props.name} {props.value}%</p> : <p>{props.name} {props.value}</p>}
        </div>
    )
}

export default Statistics