import React,{ useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { BsCollectionPlay ,BsPerson} from 'react-icons/bs'
const Subscriptions = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)

    useEffect(()=>{
        UI.handleHideTags()
    },[])

    return (
        <Layout>
            <div className="sign-in-sites">
                <BsCollectionPlay />
                <h2>Don`t miss new videos</h2>
                <p>Sign in to see updates from your favorite YouTube channels</p>
                <button><BsPerson /> Sign In</button>
            </div>
        </Layout>
    )
}

export default Subscriptions
