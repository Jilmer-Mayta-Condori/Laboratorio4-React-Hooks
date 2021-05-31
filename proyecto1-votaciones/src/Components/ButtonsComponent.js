import React from 'react'
import ButtonClick from './ButtonComponent'

const Buttons = (props) => {
    return(
        <div>
            <ButtonClick funcion={props.onClickButtonGood} text="good"/>
            <ButtonClick funcion={props.onClickButtonNeutral} text="neutral"/>
            <ButtonClick funcion={props.onClickButtonBad} text="bad"/>
        </div>
    )
}

export default Buttons