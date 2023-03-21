import React,{useState} from 'react'
import {IoIosArrowDown} from "react-icons/io";
import TakeAwayTaipei from './TakeAwayTaipei';
import TakeAwayNewTaipei from './TakeAwayNewTaipei';
import TakeAway桃園 from './TakeAway桃園';
import TakeAway彰 from './TakeAway彰';
import TakeAwayYulin from './TakeAwayYulin';
import TakeAwayKaou from './TakeAwayKaou';
import TakeAwayKeelung from './TakeAwayKeelung';

function TakeAwayForm() {
  const[showTaipei,setShowTaipei]=useState("")
  const [showNewTaipei,setShowNewTaipei]=useState("")
  const[showTaouy,setShowTaouy]=useState("")
  const[showChung,setShowChung]=useState("")
  const[showYulin,setShowYuling]=useState("")
  const[showKaou,setShowKaou]=useState("")
  const[showKeelung,setShowKeelung]=useState("")
  return (
    <div style={TakeAwayCotainer}>
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Taipei</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowTaipei(!showTaipei)}/>
      </div>
      {
        showTaipei?(
          <TakeAwayTaipei/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>New Taipei</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowNewTaipei(!showNewTaipei)}/>
      </div>
      {
        showNewTaipei?(
          <TakeAwayNewTaipei/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Taoyuan Hsinchu Miaoli</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowTaouy(!showTaouy)}/>
      </div>
      {
        showTaouy?(
          <TakeAway桃園/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Taichung Changhua</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowChung(!showChung)}/>
      </div>
      {
        showChung?(
          <TakeAway彰/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Yunlin Chiayi Tainan</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowYuling(!showYulin)}/>
      </div>
      {
        showYulin?(
          <TakeAwayYulin/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Kaohsiung Pingtung</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowKaou(!showKaou)}/>
      </div>
      {
         showKaou?(
          <TakeAwayKaou/>
        ):(
          ""
        )
      }
      <div style={TakeAwayCol}>
      <span style={{fontSize:"17px"}}>Keelung Yilan</span>
      <IoIosArrowDown style={{color:"#ffc704",fontWeigh:"700",position:"absolute",top:"0",right:"0",fontSize:"30px"}} onClick={()=>setShowKeelung(!showKeelung)}/>
      </div>
      {
        showKeelung?(
         <TakeAwayKeelung/>
       ):(
         ""
       )
     }
    </div>
  )
}

export default TakeAwayForm

const TakeAwayCotainer={
    width:"652px",
    height:"auto",
    margin:"0 auto"
}
const TakeAwayCol={
    width:"100%",
    boxSizing:"border-box",
    height:"56px",
    border:"2px solid #EEEEEE",
    fontSize:"15px",
    paddingTop:"15px",
    margin:"5px 0px",
    position:"relative"
}
