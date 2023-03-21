import React from 'react'
import {useState} from 'react'
import {useEffect,useRef,useCallback} from 'react'
import {BiRightArrow}  from "react-icons/bi"
import {BiLeftArrow}  from "react-icons/bi"
import '../App.css'

function NewSlider({slides}) {
  const timeRef=useRef(null);
  const[currentIndex,setCurrentIndex]=useState(0)
      const MainSliderStyled={
          position:"relative",
          height:"100%",
      }
      const SlidesStyles={
        position:"absolute",
        width:"100%",
        height:"720px",
        borderRadius:"30px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currentIndex].url})`,
    }
      const leftArrowStyles={
        top:"50%",
        position:"absolute",
        fontSize:"70px",
        color:"white",
        zIndex:"1",
        cursor:"pointer",
        left:"100px"
    }
    const rightArrowStyles={
        top:"50%",
        position:"absolute",
        fontSize:"70px",
        color:"white",
        zIndex:"1",
        cursor:"pointer",
        right:"100px"
    }
    const GoNextPage=useCallback(()=>{
      const isLastSlide=currentIndex===slides.length -1;
      const NewIndex=isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(NewIndex);
    },[currentIndex,slides])
    const GoPrevPage=()=>{
      const isFirstIndex=currentIndex===0;
      const NewIndex=isFirstIndex ? slides.length-1 : currentIndex-1;
      setCurrentIndex(NewIndex);
    }
    useEffect(()=>{
      if(timeRef.current){
        clearTimeout(timeRef.current)
      }
      console.log('ues effect')
      timeRef.current=setTimeout(()=>{
        GoNextPage()
      },3000)
      return ()=>clearTimeout(timeRef.current);
    },[GoNextPage])
  return (
    <div style={MainSliderStyled}>       
      <div style={SlidesStyles}></div>
      <div style={leftArrowStyles} onClick={GoPrevPage}><BiLeftArrow/></div>
      <div style={rightArrowStyles} onClick={GoNextPage}><BiRightArrow/></div>   
    </div>
  )
}




export default NewSlider
