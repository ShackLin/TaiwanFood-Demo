import React from 'react'
import Header from './Header'
import Fotter from './Fotter'


function Default({children}) {
  return (
    <div>
    <Header/>
    {children}
    <Fotter/>
    </div>
  )
  
}

export default Default
