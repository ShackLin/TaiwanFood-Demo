import React from 'react'
import Default from '../Layout/Default'
import { JoinTitleStyle } from '../StyledComponent/JoinStyled'
import { MainContainer } from '../StyledComponent/MainContainer'
import '../App.css'


function JoinUs() {
  return (
    <Default >
    <MainContainer>
      <JoinTitleStyle>
        <b>Join Us</b>
      </JoinTitleStyle>
      <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
      <a className="ImageLink" href="https://kad.events.104.com.tw/202103_LIANG-SHE-HAN-BUY-GOOD/index.html">
      <img src="https://www.buygood.com.tw/images/joinus1080new.jpg" alt="加入我們"/>
      </a>
      <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
    </MainContainer>
    </Default>
  )
}

export default JoinUs
