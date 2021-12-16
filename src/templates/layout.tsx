import React,{ useState, useEffect } from 'react'
import { routes } from '../routes'
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
            for(let route in routes.withSidebar){
                if(path === routes.withSidebar[route] && !isMobile){
                    console.log('sidebar returned')
                    return <Sidebar />
                }else if(path === routes.withSidebar[route] && isMobile){
                    return <SidebarFixed />
                }else if(path.slice(0,16) === '/channel-details'){
                    return <Sidebar fix={41}/>
                }else if(path === '/explore'){
                    return <Sidebar fix={0} paddingTop={41}/>
                }
            }
        
            for(let route in routes.withSidebarFixed){
                if(path === routes.withSidebarFixed[route] && !isMobile){
                    return <SidebarFixed />
                }else if(path === routes.withSidebarFixed[route] && isMobile){
                    return <SidebarFixed />
                }else if(path.slice(0,8) === '/details'){
                    return <SidebarFixed />
                }else if(path.slice(0,17) === '/playlist-details'){
                    return <SidebarFixed />
                }
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
