
import React,{useState} from 'react'
import '../App.css'

import {ImCross} from "react-icons/im";
import RiceSlider from '../SliderComponent/RiceSlider';

const RicesImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n09-L.jpg',title:'椒麻雞飯'},
    {id:2,url:'https://www.buygood.com.tw/images/n01-L.jpg',title:'炸排骨飯'},
    {id:3,url:'https://www.buygood.com.tw/images/n02-L.jpg',title:'炸雞腿飯'},
    {id:4,url:'https://www.buygood.com.tw/images/n03-L.jpg',title:'炸紅糟飯'},
    {id:5,url:'https://www.buygood.com.tw/images/n04-L-221222-2.jpg',title:'控肉飯'},
    {id:6,url:'https://www.buygood.com.tw/images/n06-L.jpg',title:'玫瑰油雞飯'},
    {id:7,url:'https://www.buygood.com.tw/images/n05-L.jpg',title:'滷排骨飯'},
]

function RiceComponent() {
    const[showRice,setShowRice]=useState("")
    const[order,setOrder]=useState(null)
    const MainRiceeContainer={
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
    
    <div style={MainRiceeContainer}>
      <div style={ImagesContainer}>
        {RicesImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
              <span className="overlay" onClick={()=>{setShowRice(!showRice);setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showRice ? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <RiceSlider Rice={RicesImage} order={order} />  
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
        onClick={()=>setShowRice(!showRice)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}

export default RiceComponent
