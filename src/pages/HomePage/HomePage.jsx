import React from 'react'
import Navbar from '../../component/Navbar/Navbar.jsx'
import "./HomePage.css"
import Header from '../../component/Header/Header.jsx'
import ShowCase from '../../component/ShowCase/ShowCase.jsx'
import Footer from '../../component/Footer/Footer.jsx'

function HomePage() {
  return (
    <div className='home-page'>
      <Navbar />
      <Header/>
      <ShowCase/>
      <Footer/>
    </div>
  )
}

export default HomePage
