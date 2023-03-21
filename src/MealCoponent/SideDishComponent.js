import {ImCross} from "react-icons/im";
import React,{useState} from 'react'
import SideDishSlider from '../SliderComponent/SideDishSlider';
import '../App.css'

const SidesImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n30-L.jpg',title:'椒麻炸豆腐'},
    {id:2,url:'https://www.buygood.com.tw/images/n301-L.jpg',title:'柚香蘿蔔'},
    {id:3,url:'https://www.buygood.com.tw/images/n38-L.jpg',title:'黃金泡菜'},
    {id:4,url:'https://www.buygood.com.tw/images/n39-L.jpg',title:'韓式泡菜'},
    {id:5,url:'https://www.buygood.com.tw/images/n37-L.jpg',title:'燙青菜'},
    {id:6,url:'https://www.buygood.com.tw/images/n34-L.jpg',title:'黃金炸豆腐'},
    {id:7,url:'https://www.buygood.com.tw/images/n35-L-221222.jpg',title:'皮蛋嫩豆腐'},
    {id:8,url:'https://www.buygood.com.tw/images/n31-L.jpg',title:'秋葵'},
    {id:9,url:'https://www.buygood.com.tw/images/n36-L-221222.jpg',title:'香滷油豆腐'},
    {id:10,url:'https://www.buygood.com.tw/images/n33-L.jpg',title:'香滷油鴨蛋'},
]

function SideDishComponent() {
    const[showSide,setShowSide]=useState("")
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
        {SidesImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
                <span className="overlay" onClick={()=>{setShowSide(!showSide);setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showSide ? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <SideDishSlider sides={SidesImage} order={order}/>  
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
        onClick={()=>setShowSide(!showSide)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}


export default SideDishComponent
