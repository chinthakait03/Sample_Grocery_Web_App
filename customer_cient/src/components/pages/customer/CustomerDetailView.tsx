import { useNavigate, useParams } from "react-router-dom";
import "./CustomerDetailView.scss";
import { useEffect, useRef, useState } from "react";
import type { CustomerDetailModel } from "../../../models/customer-models";
import { deleteCustomerData, getCustomerData } from "../../../services/costomer-service";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

function CustomerDetailView() {


  const {id} = useParams();
  const initialized = useRef(false);
  const [customer,setCutomer] = useState<CustomerDetailModel>();
  const navigate = useNavigate();


  async function loadCustomer(){

    
    setCutomer(await getCustomerData(Number(id)));
  }

  async function deleteCustomer(){

    try {
          await deleteCustomerData(Number(id));
          navigate("/customers");
          
        } catch (e) {
          
          console.log(e);
          
          alert("Not success")
        }
  }

  function editCustomer(){
    navigate("/customers/" + id + "/edit")
  }

  useEffect(() => {
      if (initialized.current) {
        return;
      }
  
      initialized.current = true;
      dayjs.extend(relativeTime);
      loadCustomer();
      
    }, []);
  


  return(
     <div className="container">
      {!customer && <p> Loading ...</p>}
      {customer &&  (<>
      <h1>
        Customer Detail of {customer.name} ({id})
        </h1>
        <table className="table  table-bordered">
          <colgroup>
          <col width="200px"/>
          <col />
          </colgroup>
          <tbody>
          <tr>
            <th>ID</th>
            <td>{id}</td>
          </tr>  
          <tr>
            <th>Name</th>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <th>Mobile</th>
            <td>{customer.mobile}</td>
          </tr>
          <tr>
            <th>Nic Number</th>
            <td>{customer.nic}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{dayjs(customer.dob).format("YYYY MMMM DD")} ({dayjs(customer.dob).toNow(true)})</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{customer.gender}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{customer.city}</td>
          </tr>
          <tr>
            <th>Created At</th>
            <td>{dayjs(customer.createdAt).format("YYYY MMMM DD , HH:mm A")}</td>
          </tr>
          <tr>
            <th>Last Modified At</th>
            <td>{dayjs(customer.updatedAt).format("YYYY MMMM DD , HH:mm A")}</td>
          </tr>

          </tbody>  
            
          
        </table>
        <div className="d-flex justify-content-end gap-3">
          <button onClick={editCustomer} className="btn btn-warning d-inline-flex gap-1 align-items-center"><BsPencilSquare />Edit</button>
          <button onClick={deleteCustomer} className="btn btn-danger d-inline-flex gap-1 align-items-center"><BsFillTrash3Fill />Delete</button>

        </div>
      </>)}
      
     </div>
    );
}

export default CustomerDetailView;
