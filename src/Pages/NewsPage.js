import React from 'react'
import Default from '../Layout/Default'
import NewSlider from '../SliderComponent/NewSlider'
import { MainContainer } from '../StyledComponent/MainContainer'
import { TitleContainer } from '../StyledComponent/BrandStyled'
import { H3TitleContainer } from '../StyledComponent/NewPageStyled'
import {FaShoppingCart} from "react-icons/fa";
import {Link} from 'react-router-dom'

function NewsPage() {
  const ImageData=[
    {id:1,url:"https://www.buygood.com.tw/images/newfood_20221018.jpg",title:"香酥豚骨"},
    {id:2,url:"https://www.buygood.com.tw/images/joinus211104.jpg",title:"香酥豚骨"},
    {id:3,url:"https://www.buygood.com.tw/images/deliverBG1023.jpg",title:"香酥豚骨"},
    {id:4,url:"https://www.buygood.com.tw/images/new_20230115.jpg",title:"歡慶開幕"},
  ]
  return (
    <Default>
   <MainContainer>
   <TitleContainer>
   <b style={{fontSize:"30px"}}>News</b>
   </TitleContainer>
   <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
   <H3TitleContainer>
   <b>
   <FaShoppingCart style={{fontSize:"28px",display:"inline-block",position:"relative",top:"4px",color:"red",marginRight:"15px"}} />
   <Link to="/online"><span style={{color:"#337ab7",fontSize:"24px",lineHeight:"24pt"}}>Welcome to use online ordering (delivery or self-pickup)</span></Link> 
   </b>
   </H3TitleContainer>
   <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
    
    <div style={{width:"1125px",height:"720px",margin:"0 auto"}}> 
    <NewSlider slides={ImageData}/>
    </div>
   </MainContainer>
   </Default>
  )
}

export default NewsPage
