import React,{ useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
const ReportHistory = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)

    useEffect(()=>{
        UI.handleSetContainersAndHideElements()
    },[])

    return (
        <Layout>
            <div className="yt-premium">
                youtube premium
            </div>
        </Layout>
    )
}

export default ReportHistory
