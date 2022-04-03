import styled from 'styled-components';
import { vars } from '../../../config/vars';

export const Form=styled.form`
    background: #fff;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 550px) {
      &{
        width: 27%;
      }
    }
`
export const FormHeader=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:solid 1px ${vars.lightColor};
    color:${vars.grayColor};
    height: 7vh;
    padding:0 20px;
`
export const FormCloseIcon=styled.span`
    color:${vars.grayColor};
    cursor: pointer;
    &:hover{
        color:${vars.primaryColor};
    }
`

export const FormBody=styled.div`
    padding: 20px;
`
export const FormInputGroup=styled.div`
    width: 100%;
    position: relative;
`
export const FormInput=styled.input`
    border: solid 2px ${vars.lightColor};
    display: block;
    border-radius: 5px;
    padding: 10px 10px 10px 43px;
    font-family: ${vars.fontPrincipal};
    width:100%;
    background: ${vars.ultraLightColor};

    &:focus{
      outline:none;
    }
`
export const FormIconInput=styled.div`
    border: solid 2px ${vars.lightColor};
    width:3%;
    display: inline-block;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    font-size:30px;
    width:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${vars.lightColor};
    color:${vars.grayColor};
    border-radius:5px 0 0 5px;
`
export const FormFooter=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top:solid 1px ${vars.lightColor};
    padding: 10px 0;
`