import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

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
