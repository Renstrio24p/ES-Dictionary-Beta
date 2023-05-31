import React, { useState } from "react";


export default function Navbar({ click , color , showSun , showMoon , showLeft , showRight , showUpload}) {
    
    return (
        <nav className="navbar">
            <div className={showLeft?"left2":"left"}>
                <a href="#0" className="menutbtn" onClick={click}>
                    <i className="fa-solid fa-bars"></i>
                    <p>Dashboard</p>
                </a>
            </div>
            <div className={showRight?"right2":"right"}>
                <a href="#0">
                    <div className="dark_mode">
                        <i className="fa-solid fa-moon" id={showMoon?"moon2":"moon"}></i>
                        <i className="fa-solid fa-sun" id={showSun?"sun2":"sun"}></i>
                        </div>
                        <label className="switch">
                                <input type="checkbox" />
                                <span className="slider" onClick={color}></span>
                        </label>
                    <div className={showUpload?"upload2":"upload"}>
                    <i className="fa-solid fa-folder"></i>
                    <p>Upload</p>
                    </div>
                </a>
            </div>
        </nav>
    )
}