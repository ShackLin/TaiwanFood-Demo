import React from 'react'
import Default from '../Layout/Default'
import { TitleContainer } from '../StyledComponent/BrandStyled'
import { MainContainer } from '../StyledComponent/MainContainer'
import { CoverImageContainer } from '../StyledComponent/BrandStyled'
import { ParaContainer } from '../StyledComponent/BrandStyled'
function BrandStoty() {
  return (
    <Default>
     <MainContainer>
       <TitleContainer>
          <b style={{fontSize:"30px"}}>BrandStoty</b>
       </TitleContainer>
       <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
       <CoverImageContainer/>
       <ParaContainer>
         <p style={{fontSize:"14px"}}>Taiwanese son-in-law Liang Shehan, who won the gold medal of the "Top Ten Famous Chefs from Both Sides of the Taiwan Strait" in 2019 and 2016, was born in Macau. He used to be the chef of Sheraton, Junpin and Yunpin five-star hotels. He is over half a century old and has been studying Chinese cuisine for more than 30 years. , after tasting various cuisines from all over the country, Hong Kong and Macau, I found that the pork ribs and chicken leg bento of Taiwan's ancient cuisine have excellent flavors. If everyone can afford it, it is an economical and delicious daily life.</p>
         <p style={{fontSize:"14px"}}>For this reason, the Gold Medal Chef devotes himself to research and carefully selects ingredients to serve the masses with super-value bento. In 2019, "Liang Shehan Pork Ribs" was selected as one of the "Top Ten Famous Restaurants on Both Sides of the Taiwan Strait". The pork ribs are thick and plump, and the chicken legs are crispy and juicy. If you want to taste the taste of happiness and emotion, go to "Liang Shehan" ribs</p>
       </ParaContainer>
     </MainContainer>
     <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
    </Default>
  )
}

export default BrandStoty
