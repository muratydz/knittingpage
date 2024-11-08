import React from 'react'
import profil from "../../img/profil.jpeg"
import "../../css/Profil.css"

function Profil() {
  return (
    <div className='profil container'>
      <div className='profil-img'>
        <img src={profil} alt="profil" />
      </div>
      <div className='profil-title'>
          <h2>Başlık</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil qui nam beatae molestiae doloremque, eos magni laboriosam provident iure! Saepe provident dolorem delectus eius quos? Non facere molestias iusto porro.</p>
      </div>
    </div>
  )
}

export default Profil
