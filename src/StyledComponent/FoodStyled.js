import styled from 'styled-components'

export const FoodItemsContainer=styled.div`
    width:920px;
    height:auto;
    margin:0 auto;
    box-sizing: border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export const FoodItem=styled.li`
    widht:105px;
    height:20px;
    padding: 0px;
    margin:0 10px;
    background-color:#eee;
    font-size:14px;
    list-style:none;
    color:black;
    &:hover,
    &:focus{
    background-color:#fcc92c;
    }
`