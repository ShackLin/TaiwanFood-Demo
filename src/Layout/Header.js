import React from 'react'
import { ItemsContainer, LogoContainer, MainHeaderStyle } from '../StyledComponent/HeaderStyled'
import { LogoHeader } from '../StyledComponent/HeaderStyled'
import { ItemsHeader } from '../StyledComponent/HeaderStyled'
import { FaceBookContainer } from '../StyledComponent/HeaderStyled'
import { BsFacebook } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { Items } from '../StyledComponent/HeaderStyled'
import { MemberHeader } from '../StyledComponent/HeaderStyled'
import { MemberLogo } from '../StyledComponent/HeaderStyled'
import { CartContainer } from '../StyledComponent/HeaderStyled'
function Header() {
  return (
    <MainHeaderStyle>
      <LogoHeader>
        <LogoContainer />
      </LogoHeader>
      <ItemsHeader>
        <FaceBookContainer>
          <a href="https://www.facebook.com/buygoodbendon/"><BsFacebook style={{ color: "white", fontSize: "20px", marginRight: "15px" }} /></a>
          <BsCart style={{ color: "white", fontSize: "30px", marginRight: "10px" }} />
          <Link to="/online" style={{ textDecoration: "none" }}><span style={{ color: "white", fontFamily: "Glyphicons Halflings", fontWeight: "700", fontSize: "15px", display: "block" }}>Dining Car</span></Link>
        </FaceBookContainer>
        <ItemsContainer>
          <Link to="/" style={{ textDecoration: "none" }}><Items>New</Items></Link>
          <Link to="/brand" style={{ textDecoration: "none" }}><Items>Brandstory</Items></Link>
          <Link to="/food" style={{ textDecoration: "none" }}><Items>Meals</Items></Link>
          <Link to="/stores" style={{ textDecoration: "none" }}><Items>Stores</Items></Link>
          <Link to="/online" style={{ textDecoration: "none" }}><Items>Online Oder</Items></Link>
          <Link to="/explain" style={{ textDecoration: "none" }}><Items>Order Instructions</Items></Link>
          <Link to="/join" style={{ textDecoration: "none" }}><Items>Join Us</Items></Link>
        </ItemsContainer>
        <MemberHeader>
          <MemberLogo>
            <BsPerson style={{ color: "white", fontWeight: "900" }} />
            <Link to="/vip" style={{ textDecoration: "none" }}><span style={{ color: "white", fontFamily: "Glyphicons Halflings", fontWeight: "900", lineHeight: "1", fontSize: "18px" }}>For VIP</span></Link>
          </MemberLogo>
          <CartContainer>
            <BsCart style={{ color: "white", fontSize: "25px" }} />
            <Link to="/online" style={{ textDecoration: "none" }}><span style={{ color: "white", fontFamily: "Glyphicons Halflings", fontWeight: "900", fontSize: "18px", marginLeft: "10px", display: "block" }}>Dining Car</span></Link>
          </CartContainer>
        </MemberHeader>
      </ItemsHeader>
    </MainHeaderStyle>
  )
}

export default Header
