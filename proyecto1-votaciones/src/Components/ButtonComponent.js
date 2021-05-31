import React from 'react'
import styled from 'styled-components'

const ButtonClick = (props) => {
    return <Button onClick={props.funcion}>{props.text}</Button>
}


const Button = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    border: none;
    border-radius: 30px;
    box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
    cursor: pointer;
    display: grid;
    text-align: center;
    padding: 12px 0;
    width: 100%;
    position: relative;
    justify-content: center;
    max-width: 300px;
    margin: 0 auto;
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 130%;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15),
        inset 0 0 0 0.5px rgba(0, 0, 0, 0.3), inset 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    :focus {
        outline: none;
    }
`;

export default ButtonClick