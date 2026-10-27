import { BsList } from "react-icons/bs";
import "./MainWindowHeader.scss"
import LogoImage from "../../../assets/images/logo.png"
import ProfileImage from "../../../assets/images/user-dummy-image.jpg"


const MainWindowHeader = ()  => {

    return <header className="main-window-header d-flex gap-2 align-items-center">
        
        <button type="button" className="sidebar-toggle-button"> <BsList/> </button>
        <img src = {LogoImage} className="company-logo" />
        <img src = {ProfileImage} className="user-image ms-auto"/>
    </header>;
}

export default MainWindowHeader;