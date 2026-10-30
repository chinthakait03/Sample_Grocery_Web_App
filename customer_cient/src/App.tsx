// import { Link, Route, Routes } from "react-router-dom";
// import "./App.scss";
// import CustomerList from "./components/customer/CustomerList";
// import CustomerForm from "./components/customer/CustomerForm";
// import CustomerDetailView from "./components/customer/CustomerDetailView";
// import CustomerEditForm from "./components/customer/CustomerEditForm";
// import LoginForm from "./components/user/LoginForm";
// import About from "./components/About";
// import Home from "./components/Home";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* Hello Project */}

      {/* <Home />
      <About /> */}

      {/* <div className="container py-5 d-flex gap-5">
      <NavLink className="btn btn-info" to="/customers/add">Add Customer</NavLink>
      <NavLink className="btn btn-info" to="/customers"> Show Customer</NavLink>
      </div> */}

      {/* <Routes>

         <Route path="/login" element={<LoginForm />}/>
         <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path="add" element={<CustomerForm key="customer-insert"/>} /> 
          <Route path=":id" element={<CustomerDetailView />} />
          <Route path=":id/edit" element={<CustomerEditForm />}/> */}



           {/* <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} /> */}
          {/* key danne reuse karanawanam witharay */}
          {/* <Route path=":id/edit" element={<CustomerForm  key="customer-update"/>}/> */}
          {/* key danne reuse karanawanam witharay */}

         

        {/* </Route>
      </Routes> */}
      <AppRoutes/>
    </>
  );
}

export default App;
