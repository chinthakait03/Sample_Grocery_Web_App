import "./CustomerEditForm.scss"
import {   useEffect, useRef, useState } from "react";

import {  getCustomerData, updateCustomer } from "../../../services/costomer-service";
import type { CustomerDetailModel, CustomerInsertModel } from "../../../models/customer-models";
import { useNavigate, useParams } from "react-router-dom";


// const CustomerEditForm = ()=> {
function CustomerEditForm(){    

    const {id} = useParams();
      const navigate = useNavigate()
      const initialized = useRef(false);
      const[customer,setCutomer] = useState<CustomerDetailModel>()

      const [name, setName] = useState("");
      const [nic, setNic] = useState("");
      const [mobile, setMobile] = useState("");
      const [dob, setDob] = useState("");
      const [gender, setGender] = useState("");
      const [city, setCity] = useState("");
    
    
     
      
    
    
      async function formSubmit(e:React.SubmitEvent){
    
        e.preventDefault();
    
        const cust : CustomerInsertModel = {
    
          name:name, //name
          //  key of keyValue pair :  user value contain name
          // if both pair same we do like this 
    
          // mekata kotation  eya add karagannawa.   ===>  ""
          mobile:mobile, //mobile
          nic:nic,   //nic
          dob:dob,    //dob
          gender:gender,
          city:city
        }
    
      
    
        
    
        try{await updateCustomer(Number(id), cust)
            alert("Succefully Updated.")
            navigate("/customers/"+id)
        }catch(e){
          console.log(e);
          alert("not successed");
          
        }
    
    
      }
    
    
    
    
    
    async function loadCustomer(){
  
    
    const cust = await getCustomerData(Number(id));
     setCutomer(cust)
     setName(cust.name);
     setMobile(cust.mobile);
     setNic(cust.nic ?? "");
     setDob(cust.dob ?? "");
     setGender(cust.gender ?? "Male");
     setCity(cust.city ?? "");
          
      
     
    }

    function reset(){

    if (customer) {
      setName(customer.name);
     setMobile(customer.mobile);
     setNic(customer.nic ?? "");
     setDob(customer.dob ?? "");
     setGender(customer.gender ?? "Male");
     setCity(customer.city ?? "");  
    }
     

    }

        useEffect(() => {
          if (initialized.current) {
            return;
          }
      
          initialized.current = true;
          loadCustomer();
         
          
        }, []);
    
       
      
    
    
      return (
        <div className="customer-form container" >
         <h1>Customer Edit Form of {customer?.name}({id}) </h1>
    
          <form onSubmit={formSubmit}>
    
          <div className="row">
    
            <div className="col-md-6">
    
           <div className="mb-3">
            <label className="form-label">Name</label>
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
           </div>
    
            </div>
    
    
            <div className="col-md-6">
    
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
            />
            </div>
    
            </div>
    
    
    
            </div>  
    
            <div className="row">
              
            <div className="col-md-6">
              
             <div className="mb-3">
            <label className="form-label">NIC Number</label>
            <input
              type="text"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="form-control"
            />
           </div> 
              
              </div>  
    
    
    
            <div className="col-md-6">
    
    <div className="mb-3">
    
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
            />
           </div>
    
            </div>
              
              
              </div> 
    
         <div className="row">
            <div className="col-md-6">
          <div className="mb-3 ">
            
            <label className="form-label">Gender</label>
    
    
    <div>
    
    
            <div className="form-check-inline">
            <input
                id="genderMaleRadio"
                type="radio"
                name="gender"
                value="Male"
                checked={gender == "Male"}
                onChange={() => setGender("Male")}
                className="form-check-input"
                
              />
            <label className="form-check-lable" htmlFor="genderMaleRadio">
              
              
              Male
            </label>
          </div>
    
    
          <div className="form-check-inline">
            <input
                id="genderFemaleRadio"
                type="radio"
                name="gender"
                value="Female"
                checked={gender == "Female"}
                onChange={() => setGender("Female")}
                className="form-check-input"
                
              />
            <label className="form-check-lable" htmlFor="genderFemaleRadio">
              
              Female
            </label>
    
            </div>
    
            </div>
    
    
    
          </div>
    
            </div>
            <div className="col-md-6">
    
              <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
            />
           </div>
    
            </div>
    
         </div>
    
            
         <div className="d-flex justify-content-end gap-4">
          
    
          <button type="button" 
        //   onClick={loadCustomer} 
        onClick={reset}
          
          className="btn btn-outline-secondary">Reset Default</button>
         
          <button type="submit" className="btn btn-primary">
            Save Changes
            
            </button>
         </div>
           
          </form>
        </div>
      );

}

export default CustomerEditForm;