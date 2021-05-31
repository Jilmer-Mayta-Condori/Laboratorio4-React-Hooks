import React from 'react'

const ButtonClick = (props) => {
    return  <button onClick={props.funcion}>{props.text}</button>
}

export default ButtonClick