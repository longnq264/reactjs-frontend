// import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const LayoutWebsite = () => {
  return (
    <div className='container'>
      <div className="wrapper">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default LayoutWebsite
