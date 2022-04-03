import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { vars } from '../../../config/vars';
export const Menu=styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1;
    transition: all 0.3s ease-in-out;
    padding-top:7.5vh;
    transform: ${props=>props.open? 'translateX(0)':'translateX(-100%)'};
    padding-left:1vw;
    padding-right:1vw;
    //media query
    @media(min-width: 450px){
        width: 17vw;
    }
`

export const MenuSubtitle=styled.h4`
    font-size: .9rem;
    color: ${vars.primaryColor};
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-family: ${vars.fontPrincipal};
    text-transform:uppercase;
`

export const MenuList=styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const MenuListItem=styled(NavLink)`
    text-decoration:none!important;
    padding: 0 0.5rem;
    cursor: pointer;
    display: block;
    &:hover{
        background-color: ${vars.lightColor};
        border-radius:5px;
    }
`
export const Icon=styled.span`
    font-size: 1.7rem;
    margin-right: 0.5rem;
    color: ${vars.grayColor};
`
export const TextItem=styled.span`
    font-size: 1rem;
    color: ${vars.grayColor};
    font-family: ${vars.fontPrincipal};
    text-transform:capitalize;
`
