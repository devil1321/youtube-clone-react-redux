import React,{ useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { GrChannel } from 'react-icons/gr'
const BroiwseChannels = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)

    useEffect(()=>{
        UI.handleHideTags()
    },[])

    return (
        <Layout>
            <div className="sign-in-sites">
               <GrChannel />
               <h2>Comming Soon</h2>
            </div>
        </Layout>
    )
}

export default BroiwseChannels
