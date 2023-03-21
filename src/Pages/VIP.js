import React from 'react'
import Default from '../Layout/Default'
import { MainContainer } from '../StyledComponent/MainContainer'
import { VipContainer } from '../StyledComponent/VipStyled'
import { FormContainer } from '../StyledComponent/VipStyled'
import '../App.css'
import {Link} from 'react-router-dom'


function VIP() {
  return (
    <Default>
      <MainContainer>
        <VipContainer>
          <FormContainer>
          <span style={{fontSize:"36px",fontWeight:"600"}}>Member Login</span>
        <div style={{padding:"30px"}}></div>
        <label className="LogginForm" for="email" >
        <input type="text" className="FormControl" placeholder="Account \ Please enter the mobile phone number" name="mb_phone" id="mb_phone" maxlength="10" required=""/>
        </label>
        <label className="LogginForm" for="psw">
        <input type="password" className="FormControl" placeholder="Account \ Please enter the mobile phone number" name="mb_psw" id="mb_psw" required=""/>
        </label>
        <label className="LogginForm2" for="psw">
        <input type="text" className="FormControl" placeholder="
        Please enter the number from the right" name="LoginCode" id="LoginCode" maxlength="4" autocomplete="off" required=""/>
        <img src="https://www.buygood.com.tw/ChkCode.asp" onerror="this.src='ChkCode.asp?s='+Math.random();" alt="驗證碼" title="看不清楚？換一張" onclick="this.src='ChkCode.asp?s='+Math.random()" onmouseover="this.style.cursor='pointer';" style={{width:"40px",height:"30px",display:"block",marginLeft:"15px",marginTop:"5px"}}/>
        </label>
          <button type="submit" className="VipButton">Login</button>
          <div style={{marginTop:"10px"}}>
          <button className="firstBtn"><Link to="/firstLogin" className="firstlogin"
          >
          First Login Registration</Link></button>
          <button className="secondBtn"><Link to="/forgetPass" className="secondlogin">Forgot Password</Link></button>
          </div>
          </FormContainer> 
        </VipContainer>
      </MainContainer>
    </Default>
  )
}

export default VIP
