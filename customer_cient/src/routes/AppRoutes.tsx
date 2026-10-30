import { Route } from "react-router-dom";
import LoginForm from "../components/pages/user/LoginForm";
import CustomerList from "../components/pages/customer/CustomerList";
import CustomerForm from "../components/pages/customer/CustomerForm";
import CustomerDetailView from "../components/pages/customer/CustomerDetailView";
import CustomerEditForm from "../components/pages/customer/CustomerEditForm";
import {  Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../components/pages/dashboard/Dashboard";

const AppRoutes = ()  =>  {

    return (

    <Routes>

        <Route element = {<PublicRoutes/>}>
              <Route path="/login" element={<LoginForm />}/>
        </Route>
       

         <Route element = {<ProtectedRoutes/>}>
         <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path="add" element={<CustomerForm key="customer-insert"/>} /> 
          <Route path=":id" element={<CustomerDetailView />} />
          <Route path=":id/edit" element={<CustomerEditForm />}/>
         </Route> 

         </Route>
         
    </Routes>
    );

};

export default AppRoutes;