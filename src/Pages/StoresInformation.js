import React,{useState} from 'react'
import Default from '../Layout/Default'
import {MainContainer} from '../StyledComponent/MainContainer'
import { StoresStyled } from '../StyledComponent/StoresStyled'
import { SotresItemContainer } from '../StyledComponent/StoresStyled'
import TaipeiStores from '../Component/TaipeiStores'
import NewTaipieStores from '../Component/NewTaipieStores'
import 桃竹苗Stores from '../Component/桃竹苗Stores'
import TaichungStores from '../Component/TaichungStores'
import 雲嘉南Stores from '../Component/雲嘉南Stores'
import KaohsiungStores from '../Component/KaohsiungStores'
import KeelungStores from '../Component/KeelungStores'

import '../App.css'

function StoresInformation() {
    const[selected,setSelected]=useState(false)
    const[NewTaipei,setNewTaipei]=useState(false)
    const[Tayou,setTayou]=useState(false)
    const[middle,setMiddle]=useState(false)
    const[Tainan,setTainan]=useState(false)
    const[south,setSouth]=useState(false)
    const[keelung,setKeelung]=useState(false)
  return (
   <Default>
    <MainContainer>
      <StoresStyled>Stores Information</StoresStyled>
      <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
      <SotresItemContainer>
       <div className="storesItem">
        <span className="words">Taipei</span>
        <span className="cross" onClick={()=>setSelected(!selected)}>
        {selected ? '-':'+'}
        </span>
       </div>
       {
        selected?(
          <TaipeiStores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">New Taipei</span>
        <span className="cross" onClick={()=>setNewTaipei(!NewTaipei )}>
        {NewTaipei ? '-':'+'}
        </span>
       </div>
       {
        NewTaipei?(
          <NewTaipieStores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">Taoyuan Hsinchu Miaoli</span>
        <span className="cross" onClick={()=>setTayou(!Tayou)}>
        {Tayou ? '-':'+'}
        </span>
       </div>
       {
        Tayou?(
          <桃竹苗Stores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">Taichung Changhua</span>
        <span className="cross" onClick={()=>setMiddle(!middle)}>
        {middle ? '-':'+'}
        </span>
       </div>
       {
        middle?(
          <TaichungStores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">Yunlin Chiayi Tainan</span>
        <span className="cross" onClick={()=>setTainan(!Tainan)}>
        {Tainan? '-':'+'}
        </span>
       </div>
       {
        Tainan?(
          <雲嘉南Stores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">Kaohsiung Pingtung</span>
        <span className="cross" onClick={()=>setSouth(!south)}>
        {south? '-':'+'}
        </span>
       </div>
       {
        south?(
          <KaohsiungStores/>
        ):(
          ""
        )
      }
       <div className="storesItem">
        <span className="words">Keelung Yilan</span>
        <span className="cross" onClick={()=>setKeelung(!keelung)}>
        {keelung? '-':'+'}
        </span>
       </div>
       {
        keelung?(
          <KeelungStores/>
        ):(
          ""
        )
      }
      </SotresItemContainer>
  
    </MainContainer>
   </Default>
  )
}

export default StoresInformation
