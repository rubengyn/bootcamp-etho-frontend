import styled, { css } from "styled-components";

const Button = styled.a <any>`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;

    top: 588px;
    left: 800px;
    width: 321px;
    height: 38px;

    border-radius: 5px;
    opacity: 1;

    background: transparent;
    color: white;
    border: 2px solid white;
    
    font-size:17px;
    text-align: center;
    font: normal normal normal 16px/18px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

    ${(props) => props.primary && css`
    background: #E31A13;
    color: #FFFFFF;
    `}

    ${(props) => props.secondary && css`
    background: #2A2A2A;
    color:  #FFFFFF;
    `}    

`

export default Button