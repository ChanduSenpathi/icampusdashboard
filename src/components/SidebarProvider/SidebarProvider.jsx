import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function SidebarProvider({ children }) {
    const [show, setShow] = useState(false);
    
    const toggleSidebar = () => {
        setShow(prevShow => !prevShow);
    };

    return (
        <UserContext.Provider value={{ show, toggleSidebar }}>
            {children}
        </UserContext.Provider>
    );
}
