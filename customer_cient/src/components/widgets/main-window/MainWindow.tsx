import { Outlet } from "react-router-dom";
import MainWindowHeader from "../header/MainWindowHeader";
import "./MainWindow.scss"
import MainWindowFooter from "../footer/MainWindowFooter";

const MainWindow = () => {

    return (
        <>
            <MainWindowHeader/>
            <main >
            <Outlet/>
            </main>
          <MainWindowFooter/>
        </>
    )
}

export default MainWindow;