import Categories from "../components/Categories"

// import React, {useEffect, useState} from 'react';
const DonnaPage = () => {
  
  return (
    <main className="layout-web">
      <div className="main">
        <div className="slider-donna">
          <img src="https://res.cloudinary.com/da7r4robk/image/upload/v1696414592/san-valentino-donna-mob_2_un0tmy.jpg" alt="" />
          <div className="donna-slider absolute">
            <h1>Rilassati, sono morbidissimi</h1>
            <p>Piacevoli come una colazione al caldo, delicati come sei tu!</p>
            <button>LASCIATI COCCOLARE</button>
          </div>

        </div>
        <div className="main-content">
          <Categories/>
        </div>
      </div>
    </main>
  )
}

export default DonnaPage
