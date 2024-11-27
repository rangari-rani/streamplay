import React from 'react'
import "./Main.css"
import { assets1 } from '../../assets/assets1'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets1.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, </span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some peaceful music for a road trip</p>
                    <img className='bg-blue-300 rounded-full' src={assets1.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some peaceful music for a road trip</p>
                    <img className='bg-blue-300 rounded-full' src={assets1.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some peaceful music for a road trip</p>
                    <img className='bg-blue-300 rounded-full' src={assets1.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some peaceful music for a road trip</p>
                    <img className='bg-blue-300 rounded-full' src={assets1.code_icon} alt="" />
                </div>
            </div>
            <div className='main-bottom'>
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets1.gallery_icon} alt="" />
                    <img src={assets1.mic_icon} alt="" />
                    <img src={assets1.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, odio.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Main