import React from 'react';
import './Dashboard.css';
import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import { Link } from "react-router-dom";
import Chart from './chart/Chart.js';

const Dashboard = () => {
  return (
    <>
     <div className="container-center-horizontal mt-3">
       <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
              <span className="logo">POLAD</span> 
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <MdIcons.MdNotifications />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <GrIcons.GrLanguage />
                <span className="topIconBadge">2</span>
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem active mt-5">
                    <SiIcons.SiSparkpost className="sidebarIcon" />
                    Recent&nbsp;&nbsp; Posts
                  </li>
                  <li className="sidebarListItem mt-5">
                    <MdIcons.MdSchedule className="sidebarIcon" />
                    <Link to="/scheduler">Scheduler</Link>
                  </li>
                  <li className="sidebarListItem mt-5">
                    <MdIcons.MdSettings className="sidebarIcon" />
                    Settings
                  </li>
                </ul>
              </div>
          </div>
       </div>
       <div className="featured mt-5">
         <div className="featuredItem me-4">
           <span className="featuredTitle">Total Posts</span>
           <div className="featuredMoneyContainer">
             <span className="featuredMoney">120</span>
           </div>
         </div>
         <div className="featuredItem">
           <span className="featuredTitle me-5">Scheduled</span>
           <div className="featuredMoneyContainer">
             <span className="featuredMoney">16</span>
           </div>
         </div>
         <div className="featuredItem me-4">
           <span className="featuredTitle">Deleted</span>
           <div className="featuredMoneyContainer">
             <span className="featuredMoney">43</span>
           </div>
         </div>
         <div className="featuredItem">
           <span className="featuredTitle me-4">Shared</span>
           <div className="featuredMoneyContainer">
             <span className="featuredMoney">64</span>
           </div>
         </div>
         <Chart />
       </div>
     </div>
    </>
  );
};

export default Dashboard;