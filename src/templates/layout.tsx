import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RouteWithLayout:React.FC = ({children}) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default RouteWithLayout
