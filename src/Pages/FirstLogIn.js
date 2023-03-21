import React from 'react'
import Default3 from '../Layout/Default3'
import { MainContainer } from '../StyledComponent/MainContainer'
import { VipContainer } from '../StyledComponent/VipStyled'
import { FirstLogInMainTitle } from '../StyledComponent/FirstLogInStyled'
import { FirstLogInItems } from '../StyledComponent/FirstLogInStyled'
import { FormContainer } from '../StyledComponent/VipStyled'
import TermService from '../Component/TermService'
import {useState} from 'react';


function FirstLogIn() {
  const [showTermService,setShowTermService]=useState("")
  return (
    <Default3>
    <MainContainer>
      <VipContainer>
    <FormContainer>
        <FirstLogInMainTitle>
        Sign Up
    </FirstLogInMainTitle>
    <FirstLogInItems>
    { /* PhoneNumber Part */}
      <label for="mbPhone" style={{width:"120px"}}>
        <b style={{marginBottom:"0.5rem",display:"block"}}>Account Number (Mobile Phone Number)</b>
        <div style={{display:"flex",flexDirection:"row"}}>
        <input type="text" className="FormControl1" name="mbPhone" required="required" />
        <p style={{display:"block",position:"relative",bottom:"1rem"}}>*Please give the correct mobile phone number, we will send a text message to verify your number, Order can be started after the verification is successful*</p>
        </div>
    </label> 
    { /* PassWord Part */}
    <label for="mbPass" style={{width:"120px"}}>
        <b style={{marginBottom:"0.5rem",display:"block"}}>PassWord</b>
        <div style={{display:"flex",flexDirection:"row"}}>
        <input type="passworde" className="FormControl1" name="mbPass" required="required" />
        <p style={{display:"block",position:"relative",bottom:"0.4rem"}}>*Password please be greater than 6 codes*</p>
        </div>
    </label>
    { /* Email Part */}
    <label for="mbEmail" style={{width:"120px"}}>
        <b style={{marginBottom:"0.5rem",display:"block"}}>Email</b>
        <input type="email" className="FormControl1" name="mbEmail" required="required"/>
    </label>  
    { /* Name Part */}
    <label for="mbName" style={{width:"120px"}}>
    <b style={{marginBottom:"0.5rem",display:"block"}}>Name</b>
    <input type="text" className="FormControl1" name="mbName" required="required"/>
    </label>   
    { /* Gender Part */}
    <div style={{display:"flex",flexDirection:"row"}}>
    <b style={{widht:"100px"}}>Gender</b> 
    <label style={{paddingLeft:"20px"}} for="mbSex">
        <input type="radio" name="mbSex" value="male" required="required"/>
        Male
    </label>
    <label style={{paddingLeft:"20px"}} for="mbSex">
        <input type="radio" name="mbSex" value="female" required="required"/>
        Female
    </label>
    </div>   
     { /* Select Part */}
     <div style={{display:"flex",flexDirection:"row",marginTop:"0.5rem"}}>
     <label for="year">
     <b style={{widht:"100px",marginRight:"1rem"}}>Date of Birthday</b>
     </label>
     <select name="year">
        <option className="Options" value="1990">1990</option>
        <option className="Options" value="1991">1991</option>
        <option className="Options" value="1992">1992</option>
        <option className="Options" value="1993">1993</option>
        <option className="Options" value="1994">1994</option>
     </select> 
     Year
     <select name="month">
        <option className="Options" value="1">1</option>
        <option className="Options" value="2">2</option>
        <option className="Options" value="3">3</option>
        <option className="Options" value="4">4</option>
        <option className="Options" value="5">5</option>
        <option className="Options" value="6">6</option>
        <option className="Options" value="7">7</option>
        <option className="Options" value="8">8</option>
        <option className="Options" value="9">9</option>
        <option className="Options" value="10">10</option>
        <option className="Options" value="11">11</option>
        <option className="Options" value="12">12</option>
     </select> 
     Month
     <select name="days">
     <option className="Options" value="1">1</option>
     <option className="Options" value="2">2</option>
     <option className="Options" value="3">3</option>
     <option className="Options" value="4">4</option>
     <option className="Options" value="5">5</option>
    </select> 
    Day
     </div>    
     { /* Verification Code Part */}
     <label for="psw" style={{marginTop:"1rem",display:"block"}}>
        <b style={{marginBottom:"0.5rem",display:"block"}}>Verification Code: (please give the number)</b>
        <div  style={{display:"flex",flexDirection:"row",marginTop:"0.5rem"}}>
        <input type="text" className="FormControl1" name="psw" required="required" />
        <img src="https://www.buygood.com.tw/ChkCode.asp" onerror="this.src='ChkCode.asp?s='+Math.random();" alt="驗證碼" title="看不清楚？換一張" onclick="this.src='ChkCode.asp?s='+Math.random()" onmouseover="this.style.cursor='pointer';" style={{width:"40px",height:"30px",display:"block",marginLeft:"15px",marginTop:"5px"}}/>
        </div>
    </label> 
    { /* CheckBox Part */}
    <div className="checkBox">
     <label>
      <input type="checkbox" value="Y" required="required"/>
      I agree to the membership terms of service of Liang Shehan website
     </label>
    </div>
    { /* Terms of Service Part */}
    <span style={{display:"block",backgroundColor:"#cbcbcb"}}>
    <a href="#!" style={{textDecoration:"none"}} onClick={()=>setShowTermService(!showTermService)}>Click here to read the Terms of Service for Members of Liang Shehan Website
    {
      showTermService?(
        <TermService/>
      ):(
        ""
      )
    }
    </a>
    </span>
    { /* Next Step Button */}
    <button  type="submit" className="nextBtn">Next Step</button>
    </FirstLogInItems> 

        </FormContainer>
      </VipContainer>
    </MainContainer>
    </Default3>
  )
}

export default FirstLogIn
