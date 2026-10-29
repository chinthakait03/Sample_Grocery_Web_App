import {  BsBarChartFill, BsBoxFill,  BsBriefcaseFill,  BsCartFill, BsDot,  BsFillGearFill,  BsFillHouseDoorFill, BsFillPeopleFill,  BsPower } from "react-icons/bs";
import { logout } from "../../../services/auth-service";
import "./MainWindowSideBar.scss"
import ProfileImage from "../../../assets/images/user-dummy-image.jpg"

interface MainWindowSidebarrParameters {

    isOpen : boolean
}
const MainWindowSideBar = ({isOpen}:MainWindowSidebarrParameters) => {

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
                        <li className="menu-item"><a > <BsFillHouseDoorFill/> Dashboard </a></li>

                        <li className="menu-item parent-menu-item"> 
                            <p> <BsCartFill/> Sales</p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#"> <BsDot/> Orders</a></li>
                                <li className="menu-item"><a href="#"> <BsDot/>  Invoices</a></li>
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p> <BsBoxFill/> Inventory </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#"> <BsDot/> Products</a></li>
                                <li className="menu-item"><a href="#"> <BsDot/> Categories</a></li>
                                <li className="menu-item"><a href="#"> <BsDot/> Stock</a></li>
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p> <BsFillPeopleFill/> Customers </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsDot/> Customer List </a></li>
                                <li className="menu-item"><a href="#">  <BsDot/> Loyalty </a></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p> <BsBriefcaseFill/> Suppliers </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsDot/> Supplier List </a></li>
                                <li className="menu-item"><a href="#">  <BsDot/> Purchases </a></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p> <BsBarChartFill/> Reports </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsDot/> Sales Report </a></li>
                                <li className="menu-item"><a href="#">  <BsDot/> Inventory Report </a></li>
                                
                            </ul>
                        </li>

                        <li className="menu-item parent-menu-item">
                            <p> <BsFillGearFill/> Settings </p>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">  <BsDot/> Users </a></li>
                                <li className="menu-item"><a href="#">  <BsDot/> Roles </a></li>
                                
                            </ul>
                        </li>
                        
                       
                        
                    </ul>
                </nav>

                
            </aside>
        )
}

export default MainWindowSideBar;