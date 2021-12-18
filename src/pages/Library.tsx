import React,{ useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { MdOutlineQueuePlayNext } from 'react-icons/md'
import { BsPerson} from 'react-icons/bs'

const Library = () => {
    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)

    useEffect(()=>{
        UI.handleHideTags()
    },[])

    return (
        <Layout>
            <div className="sign-in-sites">
                <MdOutlineQueuePlayNext />
                <h2>Enjoy your favorite videos</h2>
                <p>Sign in to access videos that you’ve liked or saved</p>
                <button><BsPerson /> Sign In</button>
            </div>
        </Layout>
    )
}

export default Library
