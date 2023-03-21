import React from 'react'
import Default3 from '../Layout/Default3'
import { MainContainer } from '../StyledComponent/MainContainer'
import { VipContainer } from '../StyledComponent/VipStyled'
import { FormContainer } from '../StyledComponent/VipStyled'
import { FirstLogInMainTitle } from '../StyledComponent/FirstLogInStyled'
import { FirstLogInItems } from '../StyledComponent/FirstLogInStyled'

function ForgetPassWord() {
  return (
    <Default3>
      <MainContainer>
       <VipContainer>
       <FormContainer>
         <FirstLogInMainTitle>
            Forgot PassWord
         </FirstLogInMainTitle>
         <FirstLogInItems>
         <b style={{fontSize:"15px",fontWeight:"700",marginTop:"0.5rem"}}>The password reset verification code will be sent to your mobile phone, thank you.</b>
         <label for="psw" style={{display:"block"}}>
           <input name="psw" type="password" required="required" placeholder='Please give the phone number' className="forgetItems"/>
         </label>
         <b style={{fontSize:"15px",fontWeight:"700",marginTop:"0.5rem"}}>Please enter the four digits on the right:</b>
         <label for="psw" style={{display:"block"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
           <input name="psw" type="text" required="required" placeholder='Please give the number on the right' className="forgetItems"/>
           <img src="https://www.buygood.com.tw/ChkCode.asp" onerror="this.src='ChkCode.asp?s='+Math.random();" alt="驗證碼" title="看不清楚？換一張" onclick="this.src='ChkCode.asp?s='+Math.random()" onmouseover="this.style.cursor='pointer';" style={{width:"40px",height:"30px",display:"block",marginLeft:"15px",marginTop:"5px"}}/>
           </div>
         </label>
         <button  type="submit" className="nextBtn2">Enter</button>
         <div style={{opacity:"0"}}>
         佛光山今天新聞稿表示，星雲法師生前說過「我沒有舍利子。」但昨天在荼毘儀式經過3個多小時後，弟子們在整理靈骨時，發現有許多清淨白皙、光滑圓潤，宛如珍珠般大小的圓形結晶舍利子。這些舍利子有些散落、有些嵌在潔白遺骨中，更有無數小舍利子，數量難以計算，令人震驚。舍利子色澤多為淨白，猶如星雲法師所坐的涅槃塔，其他還有紅、黃、藍、黑等色的圓形結晶堅固子，另有舍利花等。佛光山今天新聞稿表示，星雲法師生前說過「我沒有舍利子。」但昨天在荼毘儀式經過3個多小時後，弟子們在整理靈骨時，發現有許多清淨白皙、光滑圓潤，宛如珍珠般大小的圓形結晶舍利子。這些舍利子有些散落、有些嵌在潔白遺骨中，更有無數小舍利子，數量難以計算，令人震驚。舍利子色澤多為淨白，猶如星雲法師所坐的涅槃塔，其他還有紅、黃、藍、黑等色的圓形結晶堅固子，另有舍利花等。
         </div>
         </FirstLogInItems>
      </FormContainer>
       </VipContainer>
      </MainContainer>
    </Default3>
  )
}

export default ForgetPassWord
