import styled from 'styled-components';
import { vars } from '../../../config/vars';

export const CardTable = styled.div`
    width:98%;
    background-color:#ffffff;
    border:none;
    border-radius:5px;
    box-shadow: -3px 1px 5px 5px ${vars.lightColor};
    -webkit-box-shadow: -3px 1px 5px 5px ${vars.lightColor};
    -moz-box-shadow: -3px 1px 5px 5px ${vars.lightColor};
    padding-bottom:10px;
`
export const CardTableHeader = styled.div`
    width:100%;
    height:60px;
    border-bottom:1px solid ${vars.lightColor};
    display: flex;
    align-items: center;
    padding-left:20px;
    color:${vars.grayColor};
    font-size:1.1rem;
    font-weight:bold;
    font-family:${vars.fontPrincipal};
`

export const CardTableOptions = styled.div`
    width:100%;
    height:70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    flex-wrap:wrap;
`
export const Table=styled.table`
    min-width:98%;
    border:solid 1px ${vars.lightColor};
    margin:0 auto;
    overflow-x: auto;
`
export const Thead=styled.thead`
    color:${vars.grayColor};
    font-size:.9rem;
    padding:20px 0;
`
export const Tr=styled.tr`
    height:40px;
    border-top:1px solid ${vars.lightColor};
    &:nth-child(2n){
        background-color:${vars.ultraLightColor};
    }
`
export const Th=styled.th`
    padding-left:10px;
    border-right:solid 1px ${vars.lightColor};
`
export const Tbody=styled.tbody`
    padding:20px 0;
`
export const Td=styled.td`
    padding-left:10px;
    border-right:solid 1.1px ${vars.lightColor};
`

export const CardTableFooter=styled.div`
    margin-top:5px ;
    width:100%;
    height:60px;
    display: flex;
    padding-left:20px;
    flex-direction: column;
    @media screen and (min-width:450px) {
      &{
          flex-direction:row;
          justify-content:space-between;
      }
    }
`
export const TablePaginatior=styled.div`
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 2px;
    padding:0 20px;

`