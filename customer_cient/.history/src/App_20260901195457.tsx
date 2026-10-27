import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CustomerList from "./components/customer/CustomerList";
import CustomerForm from "./components/customer/CustomerForm";
import CustomerDetailView from "./components/customer/CustomerDetailView";
// import About from "./components/About";
// import Home from "./components/Home";

function App() {
  return (
    <>
      {/* Hello Project */}

      {/* <Home />
      <About /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path="add" element={<CustomerForm />} />
          <Route path=":id" element={<CustomerDetailView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
