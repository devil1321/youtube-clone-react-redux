import React,{ useState } from 'react'

const Sidebar = () => {
    const [isThin,setIsThin] = useState<boolean>(false)

    return (
        <div className="sidebar">
            <img src="/assets/main-logo.svg" alt="" />
            <div className="sidebar-expand">expand</div>
            <div className="sidebar-thin">thin</div>
        </div>
    )
}

export default Sidebar
