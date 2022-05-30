import React from 'react'
import Footer from '../components/Global/Footer/Footer'
import Navbar from '../components/Global/Navbar/Navbar'

function Layout({children} : any)  {
  return (
      <div>
          <Navbar />
          {children}
          <Footer/>
    </div>
  )
}

export default Layout