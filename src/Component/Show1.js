import React from 'react'

function Show1() {
  const ShowTitle={
    color:" #3c763d",
    backgroundColor:"#dff0d8",
    width:"1125px",
    height:"auto",
    boxSizing:"border-box",
    marginBottom:"20px",
    padding:"15px",
    display:"flex",
    flexDirection:"column"
  }
  const SpanStyle={
    fontSize:"20px",
    fontWeight:"500"
  }
  return (
    <div style={ShowTitle}>
      <span style={SpanStyle}>1. Choose delivery (enter the address to determine the branch that provides delivery near you) or self-pickup (select a branch to order food)</span>
      <span style={SpanStyle}>※Joining members can use the regular branch store function</span>
      <span style={SpanStyle}>2. Select the date and time of delivery (pickup)</span>
      <span style={SpanStyle}>3. Select the meal you want to order</span>
      <span style={SpanStyle}>4. Confirm your meals and order information (you can enter the system)</span>
      <span style={SpanStyle}>5. Select member or non-member to checkout (only need to verify the mobile phone number)</span>
      <span style={SpanStyle}>6. Choose payment method</span>
      <span style={SpanStyle}>7. After the payment is completed, the site will send a newsletter about the order content to complete the order process.</span>
    </div>
  )
}

export default Show1
