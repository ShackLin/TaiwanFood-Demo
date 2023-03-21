import React,{useState} from 'react'
import '../App.css'
import NoodeSlider from '../SliderComponent/NoodeSlider'
import {ImCross} from "react-icons/im";

const NoodlesImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n19-L.jpg',title:'椒麻雞麵'},
    {id:2,url:'https://www.buygood.com.tw/images/n11-1-L.jpg',title:'炸排骨麵'},
    {id:3,url:'https://www.buygood.com.tw/images/n12-1-L.jpg',title:'炸雞腿麵'},
    {id:4,url:'https://www.buygood.com.tw/images/n13-1-L.jpg',title:'炸紅糟麵'},
    {id:5,url:'https://www.buygood.com.tw/images/n14-L-221222.jpg',title:'控肉麵'},
    {id:6,url:'https://www.buygood.com.tw/images/n15-1-L.jpg',title:'滷排骨麵'},
    {id:7,url:'https://www.buygood.com.tw/images/n16-L.jpg',title:'玫瑰油雞麵'},
]

function NoodlesComponent() {
    const[showNoodle,setShowNoodle]=useState("")
    const[order,setOrder]=useState(null)
    const MainNoodleContainer={
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
    
    <div style={MainNoodleContainer}>
      <div style={ImagesContainer}>
        {NoodlesImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
                <span className="overlay" onClick={()=>{setShowNoodle(!showNoodle);setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showNoodle ? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <NoodeSlider slides={NoodlesImage} order={order}/>  
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
        onClick={()=>setShowNoodle(!showNoodle)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}

export default NoodlesComponent
