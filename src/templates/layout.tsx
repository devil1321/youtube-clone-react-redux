import React,{ useState, useEffect } from 'react'
import { Links } from '../routes'
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
            for(let route in new Links().withSidebar){
                if(path === '/'){
                    return <Sidebar />
                }
                else if(path === new Links().withSidebar[route] && !isMobile){
                    return <Sidebar fix={0} paddingTop={41}/>
                }else if(path === new Links().withSidebar[route] && isMobile){
                    return <SidebarFixed />
                }else if(path.slice(0,16) === '/channel-details'){
                    return <Sidebar paddingTop={41} fix={0}/>
                }
            }
        
            for(let route in new Links().withSidebarFixed){
                if(path === new Links().withSidebarFixed[route] && !isMobile){
                    return <SidebarFixed />
                }else if(path === new Links().withSidebarFixed[route] && isMobile){
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
