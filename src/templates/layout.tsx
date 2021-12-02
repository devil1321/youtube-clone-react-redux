import React,{ useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarFixed from '../components/SidebarFixed'
import Search from '../components/Search'

import { useLocation } from 'react-router-dom'

import '../styles/theme/theme.scss'

const RouteWithLayout:React.FC = ({children}) => {
    const [isFixed,setIsFixed] = useState(false)
    const location = useLocation()
    const path = location.pathname

    const handleTypeOfSidebar = (path:any) =>{
        if(path === '/'){
            return <Sidebar />
        }else{
            return <SidebarFixed />
        }
    }

    return (
        <div className="page-wrapper">
            <Search />
            <div className="container">
                {handleTypeOfSidebar(path)}
                <div className="container-inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RouteWithLayout
