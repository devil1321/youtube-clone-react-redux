import React,{ useState,useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { CgStopwatch } from 'react-icons/cg'
import { BsPerson,BsPauseCircle,BsTrash } from 'react-icons/bs'

const History = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)
    const [isHistory,setIsHistory] = useState<boolean>(true)
    useEffect(()=>{
        UI.handleHideTags()
    },[])

    return (
        <Layout>
            <div className="history">
                <div className="history__left-content">
                    {isHistory
                    ? <div className="history__main">
                        <CgStopwatch />
                        <h2>Keep track of what you watch</h2>
                        <p>Watch history isn't viewable when signed out. <a href="#">Learn more</a></p>
                        <button><BsPerson />Sign In</button>
                    </div>
                    : <p><a href="#">Sign in</a> to view your Community history</p>}
                </div>
                <div className="history__right-content">
                    <h2>Hisotry type</h2>
                    <div className="history__field">
                        <label htmlFor="history">Watch History</label>
                        <input onChange={()=>{setIsHistory(true)}} type="radio" name="type" id="history" />
                    </div>
                    <div className="history__field">
                        <label htmlFor="community">Community</label>
                        <input onChange={()=>{setIsHistory(false)}} type="radio" name="type" id="community" />
                    </div>
                    {isHistory && 
                    <div className="history__menu">
                        <div className="history__item"><BsTrash />CLEAR WATCH HISTORY</div>
                        <div className="history__item"><BsPauseCircle />PAUSE WATCH HISTORY</div>
                        <div className="history__item"><BsTrash />CLEAR ALL SEARCH HISTORY</div>
                        <div className="history__item"><BsPauseCircle />PAUSE SEARCH HISTORY</div>
                    </div>}
                </div>
            </div>
        </Layout>
    )
}

export default History
