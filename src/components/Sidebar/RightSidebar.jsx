import React, { useState } from "react";
import "./RightSidebar.css";
import { assets1 } from "../../assets/assets1";

const RightSidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className="menu " src={assets1.menu_icon} alt="" />
        <div className="new-chat">
          <img  src={assets1.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img className='bg-blue-300 rounded-full' src={assets1.message_icon} alt="" />
              <p>What is react?</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* bottom */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets1.question_icon} alt="" />
         {extended?<p>Help</p>:null} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets1.history_icon} alt="" />
          {extended? <p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets1.setting_icon} alt="" />
         {extended?  <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
