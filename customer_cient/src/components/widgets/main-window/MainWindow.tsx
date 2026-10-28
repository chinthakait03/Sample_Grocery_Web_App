import { Outlet } from "react-router-dom";
import MainWindowHeader from "../header/MainWindowHeader";
import "./MainWindow.scss"
import MainWindowFooter from "../footer/MainWindowFooter";
import MainWindowSideBar from "../side-bar/MainWindowSideBar";
import { useState } from "react";

const MainWindow = () => {

    const [sidebarOpen ,setSidebarOpen] = useState(false);

    function handleMainWindowContentClick  () {
        if (sidebarOpen) {
            setSidebarOpen(false)
        }
    }

    

    return (
        <>
            <MainWindowHeader onSidebarOpen = {setSidebarOpen} isOpened = {sidebarOpen}/>
            <main className="main-page">
            <MainWindowSideBar isOpen = {sidebarOpen}/> 
            <div className="main-window-content" onClick={handleMainWindowContentClick}>   
            <Outlet/>
            </div>
            </main>
          <MainWindowFooter/>
        </>
    )
}

export default MainWindow;