import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Footer from '../components/Footer'

import '../styles/theme/theme.scss'

const RouteWithLayout:React.FC = ({children}) => {
    return (
        <div className="container">
            <Sidebar />
            <div className="container-inner">
                <Search />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default RouteWithLayout
