'use client'

import { useState } from 'react'
import Link from 'next/link'
import VideoPlayer from './components/videoPlayer'
import Chat from './components/bot/Chat'
const HomePage = () => {

    const[topic,setTopic] = useState('')
    const[domain,setDomain] = useState('')

    return (
        <div className='main min-h-screen place-content-center grid p-5'>
            <div className='boxy flex'>
                <div className="player">
                    <VideoPlayer getTopic={setTopic} className='video-player w-60 p-50'/>
                </div>                
                <div className='chat-bot m-0'><Chat topic={topic}/></div>
            </div>
            
            <Link
                    className='q-button'
                    href={{pathname: 'http://localhost:3000/'}}
            >
                Back to home
            </Link>
        </div>
    )
}
export default HomePage
