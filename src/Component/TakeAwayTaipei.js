import React from 'react'

function TakeAwayTaipei() {
  return (
    <div style={TakeContainer}>
    <p style={{backgroundColor:"#00ffff",width:"100%",fontSize:"13px"}}>Please click on the branch name to enter the order, thank you !</p>
    <table className="takeawayTable">
        <thead>
            <tr>
                <th style={{textAlign:"left"}}>Stores</th>
                <th style={{textAlign:"left"}}>Information</th>
                <th style={{textAlign:"left"}}>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Zhongzheng Nanchang Branch</a></td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-23432361</td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 153, Sec. 1, Nanchang Rd., Zhongzheng Dist., Taipei City</td>
            </tr>
            <tr>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Zhongzheng Jinan Branch</a></td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-23946074</td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 61-1, Sec. 2, Jinan Rd., Zhongzheng Dist., Taipei City </td>
            </tr>
            <tr>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Minsheng Chengde Branch</a></td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-25579750</td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 125, Minzu W. Rd., Datong Dist., Taipei City </td>
            </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Zhongzheng Guangzhou Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-23117709</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 10-7, Guangzhou St., Zhongzheng Dist., Taipei City </td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Zhongshan Dazhi Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-25320642</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 3, Dazhi Street, Zhongshan Dist, Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Xinyi Zhuangjing Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-27588382</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 202, Zhuangjing Rd, Xinyi Dist, Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Loyalty Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-28348596</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>Unit A, 1st Floor, No. 78, Section 2, Zhongcheng Rd, Shilin Dist, Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Zhishan Fuguo Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-28330039</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 60, Fuguo Rd, Shilin Dist, Taipei City</td>
        </tr>
        </tbody>
    </table>
    </div>
  )
}

export default TakeAwayTaipei

const TakeContainer={
    width:"620px",
    margin:"0 auto",
    fontSize:"20px"
}
