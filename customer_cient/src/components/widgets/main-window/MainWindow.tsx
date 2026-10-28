import { Outlet } from "react-router-dom";
import MainWindowHeader from "../header/MainWindowHeader";
import "./MainWindow.scss"
import MainWindowFooter from "../footer/MainWindowFooter";
import MainWindowSideBar from "../side-bar/MainWindowSideBar";

const MainWindow = () => {

    return (
        <>
            <MainWindowHeader/>
            <main >
            <MainWindowSideBar/> 
            <div className="main-window-content">   
            <Outlet/>
            </div>
            </main>
          <MainWindowFooter/>
        </>
    )
}

export default MainWindow;