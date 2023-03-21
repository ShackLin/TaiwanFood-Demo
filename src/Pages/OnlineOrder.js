import React,{useState} from 'react'
import Default from '../Layout/Default'
import { MainContainer } from '../StyledComponent/MainContainer'
import { OnlineContainer } from '../StyledComponent/OnlineStyled'
import { OnlineFromContainer } from '../StyledComponent/OnlineStyled'
import {Link} from 'react-router-dom'
import TakeAwayForm from '../Component/TakeAwayForm'


function OnlineOrder() {
  const[showInput,setShowInput]=useState("")
  const[showTakeAway,setShowTakeAway]=useState("")
  return (
    <Default>
      <MainContainer>     
        <OnlineContainer>
        <h2 style={{fontSize:"30px"}}>Online Order</h2>
        <OnlineFromContainer>
        <p style={{display:"block",backgroundColor:"#d9edf7",width:"693px"}}>If you are already a member and have ordered meals, please <Link to="/vip">LoigIn</Link> as a member first to use the frequently used branch functions.</p>
        <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
        <h3 style={{fontSize:"24px",lineHeight:"24pt",fontWeight:"400"}}>Please choose delivery or take-away</h3>
        <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
        <label style={{fontSize:"22px",display:"block"}} for="外送">
          <input type="checkbox" style={{marginRight:"24px"}} value="外送" 
          onClick={()=>setShowInput(!showInput)}
          />Delivery
        </label>
        {
          showInput?(
            <DeliveryForm/>
          ):(
            ""
          )
        }
        <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
        <label style={{fontSize:"22px"}} for="自取">
          <input type="checkbox" style={{marginRight:"24px"}} value="自取" 
          onClick={()=>setShowTakeAway(!showTakeAway)}/>Take-Away
        </label>
        {
          showTakeAway?(
            <TakeAwayForm/>
          ):(
            ""
          )
        }
        </OnlineFromContainer>
        </OnlineContainer>
        <div style={{paddingBottom:"60px"}}></div>
      </MainContainer>
    </Default>
  )
}

const DeliveryForm=()=>{
  return(
    <div className="well">
    <label><input type="text" placeholder='Please give the address' className="wellinput"/></label>
    <label><input type="button" className="wellbtn" value="Check Branchs"
    onClick={()=>alert('Please give the county and city, thank you.')}/></label>
    <label><input type="button" className="wellbtn" value="Check Again"/></label>
    </div>
  )
}

export default OnlineOrder
