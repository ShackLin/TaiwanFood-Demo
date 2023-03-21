import styled from 'styled-components'

export const MainFootetStyler=styled.footer`
    max-width:1800px;
    height:70px;
    background-color: #A33843;
    box-sizing: border-box;
    padding-top:10px;  
`
export const MiddleFooterContainer=styled.div`
    width:1140px;
    height:60px;
    margin:0 auto;
    text-align:center;
    box-sizing: border-box;
`
export const CopyRightContainer=styled.div`
    width:1140px;
    height:20px;
    box-sizing: border-box;
    margin:0 auto;
    text-align:center;
    color:white;
    font-weight:400;
    margin-bottom:10px;
`
export const ServiceContainer=styled(CopyRightContainer)`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
`