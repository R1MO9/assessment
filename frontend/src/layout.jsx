import React from 'react'
import Sidebar from './components/navigation/sidebar/sidebar'
import Footer from './components/navigation/footer/footer'
import Navbar from './components/navigation/navbar/navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout