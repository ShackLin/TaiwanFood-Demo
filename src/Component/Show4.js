import React from 'react'

function Show4() {
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
      <span style={SpanStyle}>According to the provisions of the Consumer Protection Law, food is not within the scope of the seven-day hesitation period of product arrival; but if the meal does not match your order, please contact customer service immediately for inquiries. If you receive the meal, please check the contents of the meal as soon as possible according to the normal procedure. If there is any abnormality such as damage, please take a photo and contact customer service immediately to inquire about it. Thank you.</span>
    </div>
  )
}

export default Show4
