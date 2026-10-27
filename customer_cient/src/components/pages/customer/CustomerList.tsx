import React, { useEffect, useRef, useState } from "react";
import "./CustomerList.scss";
import { deleteCustomerData, getCustomersData } from "../../../services/costomer-service";
import { getPriviewPageNumbers, type Page } from "../../../models/common-models";
import type { CustomerDatatModel } from "../../../models/customer-models";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight, BsFillTrash3Fill, BsInfoCircle, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");
  const [nic, setNic] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();
  const initialized = useRef(false);
  const [dataPage, setDataPage] = useState<Page<CustomerDatatModel>>();

  async function search(
    pageNumber: number,
    e: React.SubmitEvent | null = null,
    searchName:string = name,
    searchMobile:string = mobile,
    searchNic:string = nic,
    size:number = pageSize,

  ) {
    if (e) {
      e.preventDefault();
    }

    const page = await getCustomersData(
      pageNumber,
      size,
      searchName,
      searchMobile,
      searchNic,
    );

    setDataPage(page);
  }

 async function clear(){
    setName("");
    setMobile("");
    setNic("");
    setPageSize(10);
   
    search(0,null,"","","",10);
  }

  async function deleteCustomer(id:number){

    try {
      await deleteCustomerData(id);
      clear();
    } catch (e) {
      
      console.log(e);
      
      alert("Not success")
    }
    

  }

  function showCustomer(id:number){

    navigate("/customers/" + id);
  }
  function editCustomer(id:number){
     navigate("/customers/" + id + "/edit");
  }

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
    search(0);
  }, []);

  return (
    <div className="container">
      <div>
        <form onSubmit={(e) => search(0, e)}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="searchFeildName"
                  placeholder="Filter by name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="searchFeildName">Filter by name</label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="searchFeildMobile"
                  placeholder="Filter by mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <label htmlFor="searchFeildMobile">Filter by mobile</label>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="searchFeildNic"
                  placeholder="Filter by NIC number"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <label htmlFor="searchFeildNic">Filter by NIC number</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Page Size&nbsp;&nbsp;&nbsp;
                </label>
                <div className="d-inline-block">
                  <select
                    className="form-select"
                    onChange={(e) => setPageSize(parseInt(e.target.value))}
                    defaultValue={pageSize}
                  >
                    <option >10</option>
                    <option >20</option>
                    <option >50</option>
                    <option >100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-end gap-3 align-items-start">
              <button type="submit" className="btn btn-outline-secondary">
                search
              </button>
              <button type="button" className="btn btn-outline-primary" onClick={clear}>
                clear
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="table-responsive">
        {dataPage && (
          <table className="table table-striped table-bordered">

            <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col width="250px"/>
            </colgroup>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>MOBILE</th>
                <th>NIC NUMBER</th>
                <th>CITY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataPage.content.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.mobile}</td>
                    <td>{customer.nic}</td>
                    <td>{customer.city}</td>
                    <td>
                      <div className="d-flex gap-3 justify-content-end">

                      <button onClick={() => editCustomer(customer.id)} className="btn btn-warning btn-sm d-inline-flex align-item-center gap-1"> <BsPencilSquare/> Edit</button>
                      <button className="btn btn-danger btn-sm d-inline-flex align-item-center gap-1" 
                      onClick={() => deleteCustomer(customer.id)} >  <BsFillTrash3Fill /> Delete</button>
                      <button className="btn btn-info btn-sm d-inline-flex align-item-center gap-1" 
                      onClick={() => showCustomer(customer.id)} >  <BsInfoCircle />  Detail</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {!dataPage && <p>No Data Found</p>}
      </div>

      {dataPage && (
        <div className="row">
          <div className="col-md-6">
            <p>Showing {dataPage.pageable.offset + 1} to  {dataPage.pageable.offset + dataPage.numberOfElements} of {dataPage.totalElements} customers</p>
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <nav>
              <ul className="pagination">
                {/* { dataPage.number!= 0 &&} */}


                <li className="page-item ">
                  <a
                    className={
                      dataPage.number == 0 ? "page-link disabled" : "page-link"
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      search(0);
                    }}
                  >
                    <BsChevronDoubleLeft />
                  </a>
                </li>


                <li className="page-item ">
                  <a
                    className={
                      dataPage.number == 0 ? "page-link disabled" : "page-link"
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      search(dataPage.number - 1);
                    }}
                  >
                    <BsChevronLeft />
                  </a>
                </li>


                {getPriviewPageNumbers(dataPage , 7).map((n) => {
                  return (
                    <li className="page-item" key={n}>
                  <a
                    className={
                      dataPage.number == n ? "page-link active" : "page-link"
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      search(n);
                    }}
                  >
                    {n+1}
                  </a>
                </li>
                     )
                     
                     
                })}
                


                


                {/* <li className="page-item " aria-current="page">
                  <a
                    className={
                      dataPage.number == 1 ? "page-link active" : "page-link"
                    }
                    href="#"
                    onClick={() => {
                      search(1);
                    }}
                  >
                    2
                  </a>
                </li> */}


                {/* <li className="page-item">
                  <a
                    className={
                      dataPage.number == 2 ? "page-link active" : "page-link"
                    }
                    href="#"
                    onClick={() => {
                      search(2);
                    }}
                  >
                    3
                  </a>
                </li> */}


                <li className="page-item">
                  <a
                    className={
                      dataPage.number == dataPage.totalPages - 1
                        ? "page-link disabled"
                        : "page-link"
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      search(dataPage.number + 1);
                    }}
                  >
                    <BsChevronRight />
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={
                      dataPage.number == dataPage.totalPages - 1
                        ? "page-link disabled"
                        : "page-link"
                    }
                    href="#"
                    onClick={() => {
                      search(dataPage.totalPages - 1);
                    }}
                  >
                    <BsChevronDoubleRight />
                  </a>
                </li>

                
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
