import {ImCross} from "react-icons/im";
import React,{useState} from 'react'
import LaCarteSlider from "../SliderComponent/LaCarteSlider";
import '../App.css'

const CarteImage=[
    {id:1,url:'https://www.buygood.com.tw/images/n49.jpg',title:'椒麻雞'},
    {id:2,url:'https://www.buygood.com.tw/images/n41-L.jpg',title:'炸排骨'},
    {id:3,url:'https://www.buygood.com.tw/images/n42-L.jpg',title:'香酥雞腿'},
    {id:4,url:'https://www.buygood.com.tw/images/n43-L.jpg',title:'炸紅糟肉'},
    {id:5,url:'https://www.buygood.com.tw/images/n44-L.jpg',title:'滷排骨'},
    {id:6,url:'https://www.buygood.com.tw/images/n48-L.jpg',title:'玫瑰油雞'},
    {id:7,url:'https://www.buygood.com.tw/images/n46-L-221222.jpg',title:'控肉'},
]

function LaCarteComponent() {
    const[showCarte,setShowCarte]=useState("")
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
        {CarteImage.map((image,key)=>(
          <div>
            <div className="container">
              <img src={image.url} alt={image.title} key={image.id} className="image-card" /> 
                <span className="overlay" onClick={()=>{setShowCarte(!showCarte);
                setOrder(key)}}>
               <div className="text">{image.title}</div>
              </span>
            </div>
          </div>
            ))}  
      </div>
      {showCarte? (
        <div style={{
          position: "absolute",
          width:"2000px",
          height:"2000px",
          top:0,
          left:0,
          backgroundColor:"rgba(0,0,0,0.7)"
        }}>
        <LaCarteSlider  carte={CarteImage} order={order}/>  
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
        onClick={()=>setShowCarte(!showCarte)}
        >
        <ImCross/>
        </div>
        </div> ) : (
      ""
    )}
    </div>
  )
}


export default LaCarteComponent