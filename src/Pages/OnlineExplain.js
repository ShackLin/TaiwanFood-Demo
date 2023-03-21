import React,{useState} from 'react'
import Default from '../Layout/Default'
import  {MainContainer} from '../StyledComponent/MainContainer'
import { Item } from '../StyledComponent/OrderStyled'
import { ItemContainer } from '../StyledComponent/OrderStyled'
import '../App.css'
import Show1 from '../Component/Show1'
import Show2 from '../Component/Show2'
import Show3 from '../Component/Show3'
import Show4 from '../Component/Show4'
import { BottmStyle } from '../StyledComponent/OrderStyled'

function OnlineExplain() {
  const[show1,setShow1]=useState("")
  const[show2,setShow2]=useState("")
  const[show3,setShow3]=useState("")
  const[show4,setShow4]=useState("")
  return (
    <Default>
      <MainContainer>  
      <ItemContainer>
      <Item onClick={()=>setShow1(!show1)}>Ordering Process</Item>
      {
        show1?(
          <Show1/>
        ):(
          ""
        )
      }
      <Item onClick={()=>setShow2(!show2)}>Way of Payment </Item>
      {
        show2?(
          <Show2/>
        ):(
          ""
        )
      }
      <Item onClick={()=>setShow3(!show3)}>Meal Delivery Instructions</Item>
      {
        show3?(
          <Show3/>
        ):(
          ""
        )
      }
      <Item onClick={()=>setShow4(!show4)}>Instructions for returning and exchanging meals</Item>
      {
        show4?(
          <Show4/>
        ):(
          ""
        )
      }
      </ItemContainer> 
      <BottmStyle/> 
      </MainContainer>
      
    </Default>
  );
}

export default OnlineExplain
