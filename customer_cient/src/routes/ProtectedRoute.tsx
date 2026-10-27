import { Navigate } from "react-router-dom";
import { getToken } from "../services/auth-service";
import MainWindow from "../components/widgets/main-window/MainWindow";

const ProtectedRoutes = () => {

    const token = getToken();
    

    if (!token) {
        return <Navigate to = "/login" replace/>
    }

    return (
        <MainWindow/>
    )

};

export default ProtectedRoutes;