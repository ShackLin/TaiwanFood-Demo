import React from 'react'

function Show3() {
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
      <span style={SpanStyle}>1. Please refer to the ordering page of each store for the quantity limit and delivery service fee.</span>
      <span style={SpanStyle}>2. If you need to cancel the order after ordering and paying, please call to inform. If the meal has entered the production process, it cannot be canceled. Thank you for your understanding and cooperation.</span>
      <span style={SpanStyle}>3. If you need to order more than 30 meals, please order the meal before 10:30 am the day before or the day, thank you. !</span>
    </div>
  )
}

export default Show3
