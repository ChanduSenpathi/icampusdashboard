import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../SidebarProvider/SidebarProvider'
import './Navbar.css'

export default function Navbar() {
    const {toggleSidebar, show } = useContext(UserContext);
  return (
    <nav className='d-flex justify-content-between align-items-center pt-3 px-5 navbar position-sticky w-100 top-0 left-0'>
        <button type='button' className='bars_btn' onClick={toggleSidebar}>
            {show? <i className="fa-solid fa-bars"></i> : <i class="fa-solid fa-x"></i>}
        </button>
        <ul className='d-flex justify-content-between align-items-center'>
            <li className='item_links'><Link to='/' >Home</Link></li>
            <li className='item_links'><Link to='/login' >Login</Link></li>
        </ul>
    </nav>
  )
}
