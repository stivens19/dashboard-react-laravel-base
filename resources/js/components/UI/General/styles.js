import styled from 'styled-components';
import { vars } from '../../../config/vars';

export const Select = styled.select`
    height:40px;
    border:none;
    border-radius:5px;
    background-color:${vars.lightColor};
    color:${vars.grayColor};
    font-size:1rem;
    font-family:${vars.fontPrincipal};
    padding:0 5px;
    &:focus{
        outline:none;
    }
`
export const Option= styled.option`
    height:40px;
    border:none;
    border-radius:5px;
    background-color:${vars.lightColor};
    color:${vars.grayColor};
`

export const Input= styled.input`
    height:40px;
    border:none;
    border-radius:5px;
    background-color:${vars.lightColor};
    color:${vars.grayColor};
    font-size:1rem;
    font-family:${vars.fontPrincipal};
    padding:0 5px;
    &:focus{
        outline:none;
    }
`
export const Button= styled.button`
    background: ${props=>props.bgcolor?props.bgcolor:vars.primaryColor};
    border:none;
    border-radius:5px;
    color:white;
    padding:7px 15px;
    font-size:1rem;
`

export const ButtonFloat= styled.button`
    background: ${props=>props.bgcolor?props.bgcolor:vars.primaryColor};
    border:none;
    border-radius:50%;
    color:white;
    padding: 10px;
    font-size:1rem;
    position:fixed;
    bottom:45px;
    right:30px;
    z-index:999;
    width:55px;
    height:55px;
    &:hover{
        transition:all .3s ease-in-out;
        background: ${vars.lightColor};
        color:${vars.primaryColor};
        transform:rotate(360deg);
    }
`
export const ButtonLink= styled.button`
    background: none;
    border:none;
    color:${vars.grayColor};
    font-size:1rem;
    &:hover{
        text-decoration: underline;
    }
`