import React from 'react'
import Header2 from './Header2'
import Fotter from './Fotter'

function Default3({children}) {
  return (
    <div>
      <Header2/>
      {children}
      <Fotter/>
    </div>
  )
}

export default Default3
