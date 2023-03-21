import {ImCross} from "react-icons/im";
import React,{useState} from 'react'
import SoupSlider from '../SliderComponent/SoupSlider'
import '../App.css'

const SoupImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n21-L.jpg',title:'味增湯'},
    {id:2,url:'https://www.buygood.com.tw/images/n23-L.jpg',title:'竹筍排骨湯'},
    {id:3,url:'https://www.buygood.com.tw/images/n22-L.jpg',title:'蘿蔔排骨湯'},
]

function SoupComponent() {
    const[showSoup,setShowSoup]=useState("")
    const[order,setOrder]=useState(null)
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
        {SoupImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
                <span className="overlay" onClick={()=>{setShowSoup(!showSoup);setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showSoup? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <SoupSlider soup={SoupImage} order={order}/>  
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
        onClick={()=>setShowSoup(!showSoup)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}


export default SoupComponent;