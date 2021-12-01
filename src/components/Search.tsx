import React,{ useState } from 'react'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import { GrApps } from 'react-icons/gr'
import { VscSettings } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'

const Search = () => {
    const [isThin,setIsThin] = useState<boolean>(false)

    const handleThin = () =>{
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement
        const sidebarExpand = document.querySelector('.sidebar-expand') as HTMLDivElement
        const sidebarThin = document.querySelector('.sidebar-thin') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        if(isThin){
            sidebar.style.width = 'calc(4% + 30px)'
            containerInner.style.width = 'calc(96%-30px)'
            sidebarExpand.style.display = 'none'
            sidebarThin.style.display = 'block'
        }else{
            sidebar.style.width = '20%'
            containerInner.style.width = '80%'
            sidebarExpand.style.display = 'block'
            sidebarThin.style.display = 'none'
        }
        setIsThin(!isThin)
    }

    return (
        <div className="search">
            <div className="search__header" onClick={()=>{handleThin()}}>
                <button>
                    <GiHamburgerMenu />
                </button>
                <div className="search__header-logo">
                    <img src="/assets/main-logo.svg" alt="logo" />
                </div>
            </div>
            <div className="search__main">
                <form className="search__form" action="">
                    <div className="search__field">
                        <input type="text" />
                        <div className="search__magnifer-wrapper">
                            <BsSearch />
                        </div>
                    </div>
                </form>
                <FaMicrophone className="search__microphone" />
                <div className="search__menu">
                    <GrApps />
                    <VscSettings />
                    <button><BsPerson />Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Search
