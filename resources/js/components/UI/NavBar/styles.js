import styled from 'styled-components';
import { vars } from '../../../config/vars';

export const MenuNav=styled.nav`
    position: fixed;
    display:grid;
    grid-template-columns: 17vw 66vw auto;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 7vh;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 10;
`
export const NavItem=styled.div`
    height:100%;
    display: flex;
    align-items: center;
    padding: 0 1vw;
    &:nth-child(1){
        justify-content: space-between;
    }
    &:nth-child(2){
        display:none;
    }
    &:nth-child(3){
        justify-content: flex-end;
    }
    @media screen and (min-width: 450px) {
        &:nth-child(2){
            display:flex;
        }
        &:nth-child(3){
            justify-content: flex-start;
        }
    }
    
`
export const NavLinkItem=styled.li`
    list-style:none;
    margin-right:10px;
    padding:5px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background: #f5f5f5;
    }
`

export const Logo=styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
    font-family: ${vars.fontPrincipal};
    //color gris
    color: ${vars.grayColor};
    display: none;
    @media screen and (min-width: 450px) {
        &{
            display: flex;
        }
    }
`
export const ToggleButton=styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding-bottom:5px;
    color: ${vars.primaryColor};
    &:hover{
        color:#000000!important;
    }
`

export const Avatar=styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`
export const UserDetail=styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    flex-direction: column;
    line-height:1px;
`
export const UserName=styled.h4`
    font-size: 1rem;
    font-weight: bold;
    color: #000000;
    font-family: ${vars.fontPrincipal};
`