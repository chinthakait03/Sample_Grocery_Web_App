import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../services/auth-service";

const PublicRoutes = () => {

    const token = getToken();
    const location = useLocation();  // api dan inna URL soya gatha haka

    
    if (token && location.pathname  === "/login") {
        return <Navigate to = "/customers" replace/>
    }

    return <Outlet/>  //samanya widiyata routes eka wada  karanawa.

};

export default PublicRoutes;