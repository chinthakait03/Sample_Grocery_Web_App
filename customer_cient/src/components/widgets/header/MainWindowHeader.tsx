import { BsList, BsPower, BsXCircle } from "react-icons/bs";
import "./MainWindowHeader.scss"
import LogoImage from "../../../assets/images/logo.png"
import ProfileImage from "../../../assets/images/user-dummy-image.jpg"
import { logout } from "../../../services/auth-service";


interface MainWindowHeaderParameters {

    onSidebarOpen : (open :boolean ) => void;
    isOpened : boolean
}



const MainWindowHeader = ( {onSidebarOpen , isOpened} : MainWindowHeaderParameters)  => {
    


    return <header className="main-window-header d-flex gap-2 align-items-center">
        
        <button type="button" className="sidebar-toggle-button" onClick={ () => onSidebarOpen(!isOpened)}> 
            {!isOpened &&<BsList/>}
            {isOpened &&<BsXCircle/>}
             </button>
        <img src = {LogoImage} className="company-logo" />
        <div className="ms-auto d-flex align-items-center gap-4">
           
            <span className="d-none d-md-inline"> Kushan Chinthaka</span>
            <img src = {ProfileImage} className="user-image "/>
            <button type="button" className="btn btn-outline-danger  align-items-center gap-1 d-none d-sm-inline-flex" onClick={logout} >  <BsPower/> Logout</button>
        </div>
        
    </header>;
}

export default MainWindowHeader;