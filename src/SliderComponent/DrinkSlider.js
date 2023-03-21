import React,{useState} from 'react'
import {BiRightArrow} from "react-icons/bi";
import {BiLeftArrow} from "react-icons/bi";


function DrinkSlider({drink,order}) {
    const[currentIndex,setCurrentIndex]=useState(order)
    const MainDrinkStyles={
        position:"fixed",
        height:"450px",
        width:"800px",
        zIndex:"3",
        left:"18%",
        bottom:"40%",
    }
    const SlidesStyles={    
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${drink[currentIndex].url})`
    }
    const leftArrowStyles={
        position:"relative",
        fontSize:"70px",
        zIndex:"1",
        top:"77%",
        right:"70%",
        cursor:"pointer",
    }
    const rightArrowStyles={
        position:"relative",
        left:"70%",
        top:"55%",
        fontSize:"70px",
        zIndex:"1",
        cursor:"pointer",
    }
    const GotoPrev=()=>{
        const isFirstSlide=currentIndex===0;
        const NewIndex=isFirstSlide? drink.length -1:currentIndex -1;
        setCurrentIndex(NewIndex);
    }
    const GotoNext=()=>{
        const isLastSlide=currentIndex===drink.length -1;
        const NewIndex=isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(NewIndex);
    }
return(
    <div style={MainDrinkStyles}>
    <div style={leftArrowStyles} onClick={GotoPrev}><BiLeftArrow style={{color:"#afafaf"}}/></div>
        <div style={rightArrowStyles} onClick={GotoNext}><BiRightArrow style={{color:"#afafaf"}}/></div>
        <div style={SlidesStyles}></div>
    </div>
)
      
  
}

export default DrinkSlider