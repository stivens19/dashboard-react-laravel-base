import styled from 'styled-components';
import { vars } from './../config/vars';

export const Main=styled.main`
    padding-left: ${props=>props.open? '18vw':'1vw'};
    padding-top:8vh;
`
export const TitleSection=styled.h2`
    font-size:1.5rem;
    font-weight:bold;
    color:${vars.primaryColor};
    margin-top:1rem;
    margin-bottom:1rem;
`