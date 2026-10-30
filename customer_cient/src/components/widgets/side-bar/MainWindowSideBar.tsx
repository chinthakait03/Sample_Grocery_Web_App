import {  BsBarChartFill, BsBoxFill,  BsBriefcaseFill,  BsCartFill, BsChevronRight, BsCircle,  BsFillGearFill,  BsFillHouseDoorFill, BsFillPeopleFill,  BsPower } from "react-icons/bs";
import { logout } from "../../../services/auth-service";
import "./MainWindowSideBar.scss"
import ProfileImage from "../../../assets/images/user-dummy-image.jpg"
import {  NavLink } from "react-router-dom";

interface MainWindowSidebarrParameters {

    isOpen : boolean
}
const MainWindowSideBar = ({isOpen}:MainWindowSidebarrParameters) => {


    function handleToggleExpand (e:React.MouseEvent<HTMLParagraphElement>){

        const parent = e.currentTarget.parentElement;
        parent?.classList.toggle("opened");
    }

        return (
            <aside className={ isOpen ? "main-window-sidebar opened" : "main-window-sidebar"}>
                <div className="d-lg-none mb-4">
                    <div className="sidebar-user-details d-flex gap-2 align-items-center  mb-3">
                            <img src = {ProfileImage} className=" "/>
                            <span className="fw-semibold">Kushan Chinthaka</span>
                    </div>
                    <button type="button" className="btn btn-outline-danger  
                    align-items-center gap-1 w-100 d-flex justify-content-center" 
                    onClick={logout} >  <BsPower/> Logout</button>
                </div>

                <nav className="sidebar-navition">
                    <h3 className="sidebar-navition-title">MAIN NAVIGATION</h3>
                    <ul className="menu">
                        <li className="menu-item"><NavLink to="/" end> <BsFillHouseDoorFill/> Dashboard </NavLink></li>

                        <li className="menu-item parent-menu-item "> 
                            <p onClick={handleToggleExpand}> <BsCartFill/> Sales  <BsChevronRight className="chevron"/> </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#"> <BsCircle/> Orders</a></li>
                                <li className="menu-item"><a href="#"> <BsCircle/>  Invoices</a></li>
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p onClick={handleToggleExpand}> <BsBoxFill/> Inventory <BsChevronRight className="chevron"/></p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#"> <BsCircle/> Products</a></li>
                                <li className="menu-item"><a href="#"> <BsCircle/> Categories</a></li>
                                <li className="menu-item"><a href="#"> <BsCircle/> Stock</a></li>
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p onClick={handleToggleExpand}> <BsFillPeopleFill/> Customers <BsChevronRight className="chevron"/></p>
                            <ul className="sub-menu">
                                <li className="menu-item"><NavLink to="/customers" end>  <BsCircle/> Customer List </NavLink></li>
                                <li className="menu-item"><NavLink to="/customers/add" end>  <BsCircle/> Add customer </NavLink></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p onClick={handleToggleExpand}> <BsBriefcaseFill/> Suppliers <BsChevronRight className="chevron"/></p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsCircle/> Supplier List </a></li>
                                <li className="menu-item"><a href="#">  <BsCircle/> Purchases </a></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p onClick={handleToggleExpand}> <BsBarChartFill/> Reports <BsChevronRight className="chevron"/></p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsCircle/> Sales Report </a></li>
                                <li className="menu-item"><a href="#">  <BsCircle/> Inventory Report </a></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p onClick={handleToggleExpand}> <BsFillGearFill/> Settings <BsChevronRight className="chevron"/></p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsCircle/> Users </a></li>
                                <li className="menu-item"><a href="#">  <BsCircle/> Roles </a></li>
                                
                            </ul>
                        </li>
                        
                       
                        
                    </ul>
                </nav>

                
            </aside>
        )
}

export default MainWindowSideBar;