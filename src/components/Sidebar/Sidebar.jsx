import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../SidebarProvider/SidebarProvider';

const userTabs= [
    {
        id: 1,
        name: "Home",
        link: '/'
    },
    {
        id: 2,
        name: "Contact",
        link: '/'
    },
    {
        id: 3,
        name: "About",
        link: '/'
    },
    {
        id: 4,
        name: "Enquiry",
        link: '/'
    },
    {
        id: 5,
        name: "Login",
        link: 'login'
    },
    {
        id: 6,
        name: "Home",
        link: '/'
    }
]

export default function Sidebar() {
    const [tab, setTab] = useState(userTabs[0].id);
    const {show} = useContext(UserContext);
    const openSidebar = {
        left : show ? '-200px' : '0%',
        transition: 'left 1s linear'
      }
  return (
    <aside className='position-fixed left-0 h-100 sidebar_container' style={openSidebar}>
        <ul className='d-flex flex-column align-items-center h-100 text-center'>
            {userTabs.map(tabs => (
                <li key={tabs.id} onClick={() => setTab(tabs.id)} className={` ${tabs.id === tab ? "active" : ""} w-100`}>
                    <Link to={tabs.link} className={`link_item py-4 d-block ${tabs.id === tab ? "text-black" : "text-white"}`}>{tabs.name}</Link>
                </li>
            ))}
        </ul>
    </aside>
  )
}
