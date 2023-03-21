import React from 'react'
import Header from './Header'

function Default2({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Default2
