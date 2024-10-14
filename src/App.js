import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { SidebarProvider } from './components/SidebarProvider/SidebarProvider'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'


export default function App() {
  return (
    <div className='app_container'>
      <SidebarProvider>
        <Router>
          <Navbar />
          <Sidebar/>
          <Routes>            
              <Route exact path="icampusdashboard/" element={<Home />} />
              <Route exact path="icampusdashboard/login" element={<Login />} />
          </Routes>
        </Router>
      </SidebarProvider>
    </div>
  )
}
