import {ImCross} from "react-icons/im";
import React,{useState} from 'react'
import DrinkSlider from "../SliderComponent/DrinkSlider";
import '../App.css'

const DrinkImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n54-L.jpg',title:'文山包種茶'},
    {id:2,url:'https://www.buygood.com.tw/images/n55-L.jpg',title:'金萱熟成紅茶'},
    {id:3,url:'https://www.buygood.com.tw/images/n53-L.jpg',title:'古早味特調紅茶'},
    {id:4,url:'https://www.buygood.com.tw/images/n52-L.jpg',title:'蜂蜜香檸茶'},
]

function DrinkComponent() {
    const[showDrink,setShowDrink]=useState("")
    const [order,setOrder]=useState(null)
    const MainSideContainer={
        width:"1170px",
        margin:"0 auto",
        height:"50rem",
        textAlign:"center"
    }
    const ImagesContainer={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
    }
  return (
    
    <div style={MainSideContainer}>
      <div style={ImagesContainer}>
        {DrinkImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
                <span className="overlay" onClick={()=>{setShowDrink(!showDrink);setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showDrink? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <DrinkSlider drink={DrinkImage} order={order}/>  
        <div style={{
          fontWeight:"800",
          fontSize: "15px",
          cursor: "pointer",
          position: "fixed",
          top:"3%",
          right:"3%",
          color: "white",
          padding: "0px 10px",
          borderRadius: "50%",
          zIndex:"4"
        }}
        onClick={()=>setShowDrink(!showDrink)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}


export default DrinkComponent;