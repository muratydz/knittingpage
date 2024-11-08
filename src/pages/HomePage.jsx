import React from 'react'
import "../css/HomePage.css"
import Navbar from '../component/Navbar/Navbar.jsx'
import Header from '../component/Header/Header.jsx'
import ShowCase from '../component/ShowCase/ShowCase.jsx'
import Footer from '../component/Footer/Footer.jsx'

function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <ShowCase />
      <Footer />
    </div>
  )
}

export default HomePage
