// import { useEffect, useRef, useState } from "react";
// import "./CustomerForm.scss";
// import { getCustomerData, insertCustomer, updateCustomer } from "../../services/costomer-service";
// import type { CustomerInsertModel } from "../../models/customer-models";
// import { useNavigate, useParams } from "react-router-dom";

// function CustomerForm() {
//   const {id} = useParams();
//   const mode = id ? "UPDATE":"INSERT";
//   const initialized = useRef(false);
//   const navigate = useNavigate()

//   const [name, setName] = useState("");
//   const [nic, setNic] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [city, setCity] = useState("");


//   async function loadCustomer(){
  
//     if (mode == "UPDATE") {
//              const customer = await getCustomerData(Number(id));
//      setName(customer.name);
//      setMobile(customer.mobile);
//      setNic(customer.nic ?? "");
//      setDob(customer.dob ?? "");
//      setGender(customer.gender ?? "Male");
//      setCity(customer.city ?? "");
//           }
      
     
//     }
  


//   async function formSubmit(e:React.SubmitEvent){

//     e.preventDefault();

//     const customer : CustomerInsertModel = {

//       name:name, //name
//       //  key of keyValue pair :  user value contain name
//       // if both pair same we do like this 

//       // mekata kotation  eya add karagannawa.   ===>  ""
//       mobile:mobile, //mobile
//       nic:nic,   //nic
//       dob:dob,    //dob
//       gender:gender,
//       city:city
//     }

  

    

//     try{const data = await insertCustomer(customer)
//     alert("New ID:" + data.id)
//     clear() }catch(e){
//       console.log(e);
//       alert("not successed");
      
//     }


//   }

//   async function updateSubmit(e:React.SubmitEvent){

//     e.preventDefault();
    
//     const customer : CustomerInsertModel = {

//       name:name, 
//       mobile:mobile,
//       nic:nic,  
//       dob:dob,    
//       gender:gender,
//       city:city
//     }

//     try{await updateCustomer(Number(id),customer)
//     alert("Succefully Updated.")
//     navigate("/customers/"+id)
//   }catch(e){
//       console.log(e);
//       alert("not successed");
      
//     }

//   }



//     function clear(){

//       setName(""),
//       setMobile(""),
//       setNic(""),
//       setDob(""),
//       setGender(""),
//       setGender("Male"),
//       setCity("")
      
//     }

//     useEffect(() => {
//           if (initialized.current) {
//             return;
//           }
      
//           initialized.current = true;
//           loadCustomer();
         
          
//         }, []);
  


//   return (
//     <div className="customer-form container" >
//      { mode =="INSERT" && <h1>Customer Form </h1>}
//      { mode =="UPDATE" && <h1>Customer Edit Form  of {name} ({id})</h1>}

//       <form onSubmit={mode =="INSERT" ? formSubmit : updateSubmit}>

//       <div className="row">

//         <div className="col-md-6">

//        <div className="mb-3">
//         <label className="form-label">Name</label>
        
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="form-control"
//         />
//        </div>

//         </div>


//         <div className="col-md-6">

//       <div className="mb-3">
//         <label className="form-label">Mobile</label>
//         <input
//           type="text"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           className="form-control"
//         />
//         </div>

//         </div>



//         </div>  

//         <div className="row">
          
//         <div className="col-md-6">
          
//          <div className="mb-3">
//         <label className="form-label">NIC Number</label>
//         <input
//           type="text"
//           value={nic}
//           onChange={(e) => setNic(e.target.value)}
//           className="form-control"
//         />
//        </div> 
          
//           </div>  



//         <div className="col-md-6">

// <div className="mb-3">

//         <label className="form-label">Date of Birth</label>
//         <input
//           type="date"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           className="form-control"
//         />
//        </div>

//         </div>
          
          
//           </div> 

//      <div className="row">
//         <div className="col-md-6">
//       <div className="mb-3 ">
        
//         <label className="form-label">Gender</label>


// <div>


//         <div className="form-check-inline">
//         <input
//             id="genderMaleRadio"
//             type="radio"
//             name="gender"
//             value="Male"
//             checked={gender == "Male"}
//             onChange={() => setGender("Male")}
//             className="form-check-input"
            
//           />
//         <label className="form-check-lable" htmlFor="genderMaleRadio">
          
          
//           Male
//         </label>
//       </div>


//       <div className="form-check-inline">
//         <input
//             id="genderFemaleRadio"
//             type="radio"
//             name="gender"
//             value="Female"
//             checked={gender == "Female"}
//             onChange={() => setGender("Female")}
//             className="form-check-input"
            
//           />
//         <label className="form-check-lable" htmlFor="genderFemaleRadio">
          
//           Female
//         </label>

//         </div>

//         </div>



//       </div>

//         </div>
//         <div className="col-md-6">

//           <div className="mb-3">
//         <label className="form-label">City</label>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="form-control"
//         />
//        </div>

//         </div>

//      </div>

        
//      <div className="d-flex justify-content-end gap-4">
//       {mode =="UPDATE" && 
// <button  type="button" className="btn btn-outline-secondary" onClick={loadCustomer}>Reset Default</button>
//       }

//       {mode == "INSERT" &&  <button type="button" onClick={clear} className="btn btn-outline-secondary">Clear</button>}
     
//       <button type="submit" className="btn btn-primary">
//         {mode =="INSERT" ? "Add Customer":"Save Changers"}
        
//         </button>
//      </div>
       
//       </form>
//     </div>
//   );
// }

// export default CustomerForm;

import {   useState } from "react";
import "./CustomerForm.scss";
import {  insertCustomer } from "../../../services/costomer-service";
import type { CustomerInsertModel } from "../../../models/customer-models";


function CustomerForm() {
  
  
  
 

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");


 
  


  async function formSubmit(e:React.SubmitEvent){

    e.preventDefault();

    const customer : CustomerInsertModel = {

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

  

    

    try{const data = await insertCustomer(customer)
    alert("New ID:" + data.id)
    clear() }catch(e){
      console.log(e);
      alert("not successed");
      
    }


  }





    function clear(){

      setName(""),
      setMobile(""),
      setNic(""),
      setDob(""),
      setGender(""),
      setGender("Male"),
      setCity("")
      
    }

   
  


  return (
    <div className="customer-form " >  
    {/* container remove  */}
    
     <h1>Customer Form </h1>

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
      

      <button type="button" onClick={clear} className="btn btn-outline-secondary">Clear</button>
     
      <button type="submit" className="btn btn-primary">
        Add Customer
        
        </button>
     </div>
       
      </form>
    </div>
  );
}

export default CustomerForm;

