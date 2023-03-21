import React from 'react'

function Show2() {
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
  const SpanStyle1={
    fontSize:"20px",
    fontWeight:"900",
    color:"#044923",
    marginBottom:"15px"
  }
  const SpanStyle2={
    fontSize:"20px",
    fontWeight:"500",
    marginBottom:"20px"   
  }
  return (
    <div style={ShowTitle}>
      <span style={SpanStyle}>1. Credit card: Liangshehan Spare Ribs website accepts VISA, MASTERCARD, JCB, and joint credit card payments. This site uses the joint credit card center network credit card authorization mechanism, and the data transmission process encryption (SSL encryption) standard TLSv1.2 encryption, please use it with peace of mind</span>
      <hr style={{marginTop:"10px",marginBottom:"10px",border:"0",borderTop:"2px solid #eee"}}/>
      <span style={SpanStyle1}>The following financial institutions accept credit cards:</span>
      <span style={SpanStyle1}>*Credit Card*</span>
      <span style={SpanStyle2}>
      Sanshin Commercial Bank, Bank of Shanghai, Yuanta Bank, Risheng Bank, Taipei Fubon Bank, Yongfeng Bank, Yushan Bank, Mega Bank, Antai Bank, First Bank, KGI Bank, Huatai Bank, Shin Kong Bank, Yangxin Bank , Far Eastern Bank, Commonwealth Bank, Lotte Credit Card, Huanan Bank, Citigroup (Taiwan) Bank, China Trust, Cathay United Bank, Taishin Bank, HSBC (Taiwan) Bank, Changhua Bank, Cooperative Treasury, Land Bank, Taichung Bank.</span>
      <span style={SpanStyle1}>*Debit Debit Card*</span>
      <span style={SpanStyle2}>China Trust, First Bank, HSBC (Taiwan) Bank, Cathay United Bank, Yushan Bank, Huanan Bank, Mega Bank, Cooperative Finance Bank, Bank of Shanghai, Taipei Fubon, Changhua Bank, Yongfeng Bank, Taishin Bank, Land Bank, Commonwealth Bank.</span>
      <span style={SpanStyle}>2、Line Pay</span>
    </div>
  )
}

export default Show2
