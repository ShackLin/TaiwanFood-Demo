import React,{useState} from 'react';
import Default2 from '../Layout/Default2';
import NoodlesComponent from '../MealCoponent/NoodlesComponent';
import RiceComponent from '../MealCoponent/RiceComponent';
import SideDishComponent from '../MealCoponent/SideDishComponent';
import LaCarteComponent from '../MealCoponent/LaCarteComponent';
import SoupComponent from '../MealCoponent/SoupComponent';
import DrinkComponent from '../MealCoponent/DrinkComponent';
import { MainContainer } from '../StyledComponent/MainContainer';
import { FoodItemsContainer } from '../StyledComponent/FoodStyled';
import { FoodItem } from '../StyledComponent/FoodStyled';
import { H3TitleContainer } from '../StyledComponent/NewPageStyled';
import {FaShoppingCart} from "react-icons/fa";
import {Link} from 'react-router-dom'
import '../App.css'

function Foods() {
  const[showRiceComponent,setShowRiceComponent]=useState(false)
  const[showNoodleComponent,setShowNoodleComponent]=useState(false)
  const [showSideComponent,setShowSideComponent]=useState(false)
  const[showLaCarteComponent,setShowLaCarteComponent]=useState(false)
  const [showSoup,setShowSoup]=useState(false)
  const [showDrink,setShowDrink]=useState(false)
  return (
    <Default2>
      <MainContainer>
        <FoodItemsContainer>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>
            {setShowRiceComponent(true);
             setShowNoodleComponent(true);
             setShowSideComponent(true);
             setShowLaCarteComponent(true);
             setShowSoup(true);
             setShowDrink(true);
            }
            }>All Menus</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>
              {setShowNoodleComponent(false);
             setShowSideComponent(false);
             setShowLaCarteComponent(false);
             setShowSoup(false);
             setShowDrink(false);
             setShowRiceComponent(true);
            }}>Rice</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>
              { setShowSideComponent(false);
                setShowLaCarteComponent(false);
                setShowSoup(false);
                setShowDrink(false);
                setShowRiceComponent(false);
                setShowNoodleComponent(true);
            }}>Noodles</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>{
              setShowLaCarteComponent(false);
              setShowSoup(false);
              setShowDrink(false);
              setShowRiceComponent(false);
              setShowNoodleComponent(false);
              setShowSideComponent(true)}}>Sides Dish</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>{
              setShowSideComponent(false)
              setShowSoup(false);
              setShowDrink(false);
              setShowRiceComponent(false);
              setShowNoodleComponent(false);
              setShowLaCarteComponent(true)}}>A la Carte</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>{
              setShowLaCarteComponent(false)
              setShowDrink(false);
              setShowRiceComponent(false);
              setShowNoodleComponent(false);
              setShowSideComponent(false)
              setShowSoup(true)}}>Soup</a>
          </FoodItem>
          <FoodItem>
            <a href="#!" className="fooditem" onClick={()=>
              { setShowSoup(false);
                setShowRiceComponent(false);
                setShowNoodleComponent(false);
                setShowSideComponent(false)
                setShowLaCarteComponent(false);
                setShowDrink(true)}}>Drinks</a>
          </FoodItem>
        </FoodItemsContainer>
        <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
        <H3TitleContainer>
   <b>
   <FaShoppingCart style={{fontSize:"28px",display:"inline-block",position:"relative",top:"4px",marginRight:"15px",color:"red"}} />
   <Link to="/online"><span style={{color:"#337ab7",fontSize:"24px",lineHeight:"24pt"}}>Welcome to use online ordering (delivery or self-pickup)</span></Link> 
   </b>
   </H3TitleContainer>
   <hr style={{marginTop:"20px",marginBottom:"20px",border:"0",borderTop:"2px solid #eee"}}/>
   {
    showRiceComponent?
    (
      <RiceComponent/> 
    ): (
      ""
    )
  } 
  {
    showNoodleComponent?(
      <NoodlesComponent/>
    ):(
      ""
    )
  } 
  {
    showSideComponent?(
      <SideDishComponent/>
    ):(
      ""
    )
  } 
  {
    showLaCarteComponent?(
      <LaCarteComponent/>
    ):(
      ""
    )
  }
  {
    showSoup?(
      <SoupComponent/>
    ):(
      ""
    )
  }  
  {
    showDrink?(
      <DrinkComponent/>
    ):(
      ""
    )
  }     
    </MainContainer>
    </Default2>
  )
}

export default Foods
