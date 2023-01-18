import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

const LayoutPage = () => {
  return (
    <div>
        <header>
            <Banner />
        </header>
            <Outlet />
        
            <Navbar />
       
    </div>
    
    
  )
}

export default LayoutPage
