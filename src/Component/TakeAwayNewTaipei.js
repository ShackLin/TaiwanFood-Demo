import React from 'react'

function TakeAwayNewTaipei() {
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
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Zhongshan Branch</a></td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29632587</td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 120, Sec. 2, Zhongshan Rd., Banqiao Dist., New Taipei City </td>
            </tr>
            <tr>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Hansheng East Store</a></td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29647060</td>
                <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 354, Hansheng E. Rd., Banqiao Dist., New Taipei City</td>
            </tr>
            <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiaoxi North Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-26879433</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 35, Xibei Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Practice Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29628845</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 205, Shijian Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Practice Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29628845</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 205, Shijian Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Practice Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29628845</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 205, Shijian Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Practice Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29628845</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 205, Shijian Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        <tr>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}><a href="#!">Banqiao Practice Branch</a></td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"}}>02-29628845</td>
            <td style={{padding:"8px",borderTop:"1px solid #ddd"}}>No. 205, Shijian Rd., Banqiao Dist., New Taipei City</td>
        </tr>
        </tbody>
    </table>
    </div>
  )

}
const TakeContainer={
    width:"620px",
    margin:"0 auto",
    fontSize:"20px"
}

export default TakeAwayNewTaipei
