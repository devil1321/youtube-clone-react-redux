import React,{ useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarFixed from '../components/SidebarFixed'
import Search from '../components/Search'
import { State } from '../APIController/reducers'
import { useLocation } from 'react-router-dom'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../styles/theme/theme.scss'

const Layout:React.FC = ({children}) => {
    const location = useLocation()
    const path = location.pathname
    const dispatch = useDispatch()
    const uiActions = bindActionCreators(UIActions,dispatch)
    const { isMobile } = useSelector((state:State) => state.UI)


    const handleTypeOfSidebar = (path:any) =>{
        if(path === '/' && !isMobile){
            return <Sidebar />
        }else if(path === '/' && isMobile){
            return <SidebarFixed />
        }
        else if(path.slice(0,16) === '/channel-details'){
            return <Sidebar fix={41}/>
        }
        else{
            return <SidebarFixed />
        }
    }

    useEffect(()=>{
        uiActions.isMobile()
    },[])

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

export default Layout
