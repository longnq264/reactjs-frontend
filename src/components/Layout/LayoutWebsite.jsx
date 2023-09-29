// import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const LayoutWebsite = () => {
  return (
    <div className='container'>
        <Header/>
        <div id="main">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutWebsite
