import React,{ useState, useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UIActions from '../APIController/actions-creators/uiActions'

import logo from '../images/youtube-premium-template/logo.png'
import playIcon from '../images/youtube-premium-template/play-icon.png'
import downloadIcon from '../images/youtube-premium-template/download-icon.png'
import ytPlayIcon from '../images/youtube-premium-template/youtube-play-icon.png'

interface AccordionNode {
    title:string;
    node:any
}

const ReportHistory = () => {

    const dispatch = useDispatch()
    const UI = bindActionCreators(UIActions,dispatch)
    const [accordion,setAccordion] = useState<AccordionNode[]>([
        {
            title:'What is included with YouTube Premium?',
            node:<div>
                <h3>YouTube</h3>
                <ul>
                    <li>Ad-free videos: Watch millions of videos uninterrupted by ads. <a href="#">Learn more</a></li>
                    <li>Download videos to watch offline: Save videos and playlists on mobile devices and play them offline</li>
                    <li>Play in the background: Keep videos playing when using other apps or when your screen is off</li>
                </ul>
                <h3>YouTube Music</h3>
                <ul>
                    <li>Easily explore the world of music with the new and improved YouTube Music app</li>
                    <li>Ad-free music: Listen to millions of songs uninterrupted by ads</li>
                    <li>Download music to listen offline: Save music and playlists in the YouTube Music app and listen offline</li>
                    <li>Play in the background: Keep music playing when using other apps or when your screen is off</li>
                </ul>
                <h3>YouTube Kids</h3>
                <ul>
                    <li>Ad-free and offline play in the YouTube Kids app</li>
                </ul>
            </div>
        },
        {
            title:'How does downloading videos and music work?',
            node:<div>Download videos and music on your mobile devices to watch and listen offline for up to 30 days without being connected to the internet. For more details on how to download videos and music, please see this <a href="#">Help Center</a> article.</div>
        },
        {
            title:'What is background play?',
            node:<div>Background play allows videos and music to keep playing in the background, even when you open other apps or turn the screen off on your mobile device. For more details on background play, please see this <a href="#">Help Center</a> article.</div>
        },
        {
            title:'How can I cancel my membership?',
            node:<div>You can cancel your membership by visiting the <a href="#">Paid Membership</a> page. This will revert your account to free YouTube. You can rejoin YouTube Premium at any time.</div>
        }
    ])

    const handleTab = (e:any):void => {
        const id = e.target.id
        const tabs = document.querySelectorAll('.yt-premium__accordion-tab') as NodeListOf<HTMLDivElement>
        tabs.forEach((tab:HTMLDivElement) => tab.style.height = "0px")
        const tab = document.querySelector(`#tab-${id}`) as HTMLDivElement
        if(tab.classList.contains('active')){
            tab.classList.remove('active')
            tab.style.height = '0px'
            tab.style.paddingBottom = '0px'
        }else{
            tab.classList.add('active')
            tab.style.height = '100%'
            tab.style.paddingBottom = '20px'
        }
    }

    const renderAccordion = () =>{
        return accordion.map((item:AccordionNode,index:number) =>{
            const { title , node} = item
            return(
                <React.Fragment>
                    <h2 id={`${index}`} onClick={(e:any)=>{
                        handleTab(e)
                        }}>{title}</h2>
                    <div className={`yt-premium__accordion-tab ${index}`} id={`tab-${index}`}>{node}</div>
                </React.Fragment>
                
            )
        })
    }

    useEffect(()=>{
        UI.handleSetContainersAndHideElements()
    },[])

    return (
        <Layout>
            <div className="yt-premium">
                <div className="yt-premium__hero">
                    <img src={logo} alt="" />
                    <h2>Enjoy the holidays with 2 free months of YouTube Premium. Limited-time offer ends January 4.</h2>
                    <button>TRY IT FREE</button>
                    <div className="yt-premium__p">
                        <h2>2-month free trial </h2>
                        <div className="yt-premium__dot"></div>
                        <h2>Then PLN 23.99/month</h2>
                    </div>
                    <p>We'll remind you 7 days before your trial ends</p>
                    <div className="yt-premium__p">
                        <span>Free trial for eligible new members only</span>
                        <div className="yt-premium__dot"></div>
                        <span>Recurring billing</span>
                        <div className="yt-premium__dot"></div>
                        <span>Cancel anytime</span>
                    </div>
                    <p>Or save money with a <a href="#">family membership</a></p>
                    <a href="#">Restrictions apply. Learn more here.</a>
                </div>
                <div className="yt-premium__cards">
                    <div className="yt-premium__card">
                        <img src={playIcon} alt="" />
                        <h2>Ad-free &amp; background play</h2>
                        <p>Watch videos uninterrupted by ads, while using other apps, or when the screen is locked.</p>
                    </div>
                    <div className="yt-premium__card">
                        <img src={downloadIcon} alt="" />
                        <h2>Downloads</h2>
                        <p>Save videos for when you really need them – like when you’re on a plane or commuting.</p>
                    </div>
                    <div className="yt-premium__card">
                        <img src={ytPlayIcon} alt="" />
                        <h2>YouTube Music Premium</h2>
                        <p>Download our new music app and listen without interruptions.</p>
                    </div>
                </div>
                <div className="yt-premium__feature">
                    <div className="yt-premium__feature-item">
                        <div>
                            <h2>Ad-free</h2>
                            <p>Enjoy watching YouTube uninterrupted by ads whenever you sign in - on your mobile device, desktop, or enabled TV.</p>
                        </div>
                    </div>
                    <div className="yt-premium__feature-item">
                        <div>
                            <h2>Download and go</h2>
                            <p>Save videos for when you’re low on data or can’t get online.</p>
                        </div>
                    </div>
                    <div className="yt-premium__feature-item">
                        <div>
                        <h2>Background play</h2>
                        <p>With YouTube Premium, your video plays uninterrupted in the background, even when you open another app.</p>
                        </div>
                    </div>
                    <div className="yt-premium__feature-item">
                        <div>
                            <h2>YouTube Music Premium</h2>
                            <p>Easily explore the world of music ad-free, offline, and with the screen locked. Available on mobile and desktop.</p>
                        </div>
                    </div>
                </div>
                <div className="yt-premium__accordion-wrapper">
                    <h2>FAQ</h2>
                    <div className="yt-premium__accordion">
                        {renderAccordion()}
                    </div>
                    <p>Have other questions? Visit the <a href="#">YouTube Help Center</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default ReportHistory
