import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

import '../styles/theme/theme.scss'

const RouteWithLayout:React.FC = ({children}) => {
    return (
        <div className="page-wrapper">
            <Search />
            <div className="container">
                <Sidebar />
                <div className="container-inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RouteWithLayout
