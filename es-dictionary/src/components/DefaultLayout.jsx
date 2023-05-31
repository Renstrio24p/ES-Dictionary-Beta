import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../Axios-Client.js";
import { useEffect, useState } from "react";
import '../Projects/Dashboard 2 components/Dictionary.css'
import Navbar from "../Projects/Dashboard 2 components/Navbar";
import Sidebar from "../Projects/Dashboard 2 components/Sidebar";
import Dictionary from "../Projects/Dashboard 2 components/Dictionary";
import Users from "../views/Users"

export default function DefaultLayout() {
    const [showSidebar, setShowSidebar] = useState(false); //
    const [showMain, setShowMain] = useState(false); //
    const [showSun, setShowSun] = useState(false); //
    const [showMoon, setShowMoon] = useState(false); //
    const [showContainer, setShowContainer] = useState(false); //
    const [showSideHeader, setShowSideHeader] = useState(false);  //
    const [showUserInfo, setShowUserInfo] = useState(false); //
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);//
    const [showSideUser, setShowSideUser] = useState(false)//
    const [showSideMenuList, setShowSideMenuList] = useState(false);//
    const [showTitle, SetshowTitle] = useState(false);//
    const [showSideFooter, SetshowSideFooter] = useState(false);//
    const [showLeft, SetshowLeft] = useState(false); //
    const [showRight, SetshowRight] = useState(false);//
    const [showUpload, SetshowUpload] = useState(false);//
    const [showRecentSearch, SetshowRecentSearch] = useState(false);

    function handleClick(){
        setShowSidebar(!showSidebar);
        setShowMain(!showMain);
        setShowSun(!showSun);
        setShowMoon(!showMoon);
        setShowContainer(!showContainer);
        setShowSideHeader(!showSideHeader);
        setShowUserInfo(!showUserInfo);
        setShowLogoutBtn(!showLogoutBtn);
        setShowSideUser(!showSideUser);
        setShowSideMenuList(!showSideMenuList);
        SetshowTitle(!showTitle);
        SetshowSideFooter(!showSideFooter);
        SetshowLeft(!showLeft);
        SetshowRight(!showRight);
        SetshowUpload(!showUpload);
        SetshowRecentSearch(!showRecentSearch);
      }


      const [showSlideSidebar, setShowSlideSidebar] = useState(window.innerWidth >= 1006);
      const [showSlideMain, setShowSlideMain] = useState(window.innerWidth >= 1006);

      function handleClick2(){
        setShowSlideSidebar(!showSlideSidebar);
        setShowSlideMain(!showSlideMain);
      }
      
      useEffect(() => {
        const handleResize = () => {
            setShowSlideSidebar(window.innerWidth >= 1006);
            setShowSlideMain(window.innerWidth >= 1006);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
        <div className={showContainer?"container2":"container"} >
            <Sidebar click={onLogout} showSidebar={showSidebar} showSideHeader={showSideHeader} showUserInfo={showUserInfo}
            showLogoutBtn={showLogoutBtn} showSideUser={showSideUser} showSideMenuList={showSideMenuList} 
            showTitle={showTitle} showSideFooter={showSideFooter} showSlideSidebar={showSlideSidebar}/>
            <main className={showMain?"main-container2":"main-container"} id={showSlideMain ? 'slidemain2' : 'slidemain'}>
            <div className="fixed-container">
            <Navbar  color={handleClick} click={handleClick2} showSun={showSun} showMoon={showMoon}
            showLeft={showLeft} showRight={showRight} showUpload={showUpload}/>
             <Users showRecentSearch={showRecentSearch}/>
             </div>
            </main>
        </div>
    )
}