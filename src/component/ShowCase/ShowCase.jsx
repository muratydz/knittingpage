import React from 'react'
import "../../css/ShowCase.css"
import KnittingList from './KnittingList';
import Backgraund from './Backgraund';
import Profil from './Profil';



function ShowCase() {

  return (
    <div className='show-case container'>
      <KnittingList/>
      <Backgraund/>
      <Profil/>
    </div>
  )
}

export default ShowCase
