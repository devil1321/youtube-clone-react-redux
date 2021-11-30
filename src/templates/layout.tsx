import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Navbar'
import Footer from '../components/Footer'

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
