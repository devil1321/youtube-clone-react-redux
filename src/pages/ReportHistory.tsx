import React,{ useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
const ReportHistory = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)

    useEffect(()=>{
        UI.handleHideTags()
    },[])

    return (
        <Layout>
            <div className="report-history">
                <div className="report-history__main">
                    <h2>Thanks for reporting</h2>
                    <p>Any member of the YouTube community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it’s not automatically taken down. Flagged content is reviewed in line with the following guidelines:</p>
                <ul>
                    <li>Content that violates our <a href="#">Community Guidelines</a> is removed from YouTube.</li>
                    <li>Content that may not be appropriate for all younger audiences may be age-restricted.</li>
                    <li>Reports filed for content that has been deleted by the creator cannot be shown.</li>
                </ul>
                <a href="#">Learn more about reporting content on YouTube.</a>
                </div>
                <img src="/assets/report.png" alt="" />
                <p className="report-history__footer"><a href="#">Sign in</a>to view your report history.</p>
            </div>
        </Layout>
    )
}

export default ReportHistory
