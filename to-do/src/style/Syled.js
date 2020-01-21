import React from 'react';
import styled from 'styled-components';

export const Htmls = styled.html `
    font-size:22px;
`


export const Body = styled.div `
        width:100vw;
        height:100vh;
        background-color:rgba(215,215,215,1);
        display:flex;
        justify-content:center;
`;

export const FormContainer = styled.div `
        width:50vw;
        heigth:85vh;
        background-color:rgba(55,55,55,1);
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        padding:15px;
        box-shadow:1px 2px 12px 1px black ,-1px -2px 12px -1px black;

`;

export const Inputs = styled.input `
    font-size:26px;
    width:70%;
    heigth:32px;
    background:white;
    box-shadow:1px 2px 2px 1px inset black ,-1px -2px 2px -1px inset black;
    border-radius:8px;
`
export const Buttons = styled.button `
    font-size:26px;
    width:70%;
    heigth:32px;
    background:Red;
    box-shadow:1px 2px 2px 1px black ,-1px -2px 2px -1px black;
    border-radius:8px;`

export const Submit = styled.button `
    font-size:26px;
    width:30%;
    heigth:32px;
    background:Green;
    box-shadow:1px 2px 2px 1px black ,-1px -2px 2px -1px black;
    border-radius:8px;`

export const SmallContainer = styled.div `
        width:50vw;
        heigth:85vh;
        background-color:rgba(55,55,55,1);
        display:flex;
        justify-content:center;
        flex-wrap:no-wrap;

`;

export const H2 = styled.h2 `
        margin-bottom:0;
        padding-bottom:-25px;
        
`