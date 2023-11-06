import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div>
        
        <Header/>

        <div className='container-layout'>
            <div className = "box">
                <SideBar />
            </div>
            <div className = "box">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout