import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dictionary from "./Dictionary"

export default function Main() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showMain, setShowMain] = useState(false);

  function handleClick(){
    setShowSidebar(!showSidebar);
    setShowMain(!showMain);
  }

    return(
        <div>
        <Sidebar showSidebar={showSidebar}/>
        <main className={showMain?"main-container2":"main-container"} id={showMain?"main-container2":"main-container"}>
        <div className="fixed-container">
        <Navbar click={handleClick} />
        </div>
        <Dictionary />
        </main>
        </div>
    )
}