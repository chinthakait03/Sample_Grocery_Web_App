import {  axiosClient } from "../configs/api-config";
import type { Page } from "../models/common-models";
import type { CustomerDatatModel, CustomerDetailModel, CustomerInsertModel } from "../models/customer-models";
//import { getToken } from "./auth-service";

// const endpoint = API_PATH + "/customer";


// export async function insertCustomer(customer:CustomerInsertModel):Promise<CustomerDatatModel>{

    

//     const response = await fetch(endpoint,{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//         "Authorization":"Bearer " + getToken()
//       },
//       body:JSON.stringify(customer)

// });


//     const resData = await response.json();


//     if (response.ok) {
//     return resData as CustomerDatatModel 
//     }else{
//       throw Error(resData)
      
//     }

// }

// export async function getCustomersData (page:number , pageSize:number ,
//    name:string , mobile:string , nic:string):Promise<Page<CustomerDatatModel>>{

//   const params = new URLSearchParams({
//     page:page.toString(),
//     size:pageSize.toString(),
//     name:name,
//     mobile:mobile,
//     nic:nic,
//     sort:"id,desc"
//   });


//   const response = await fetch(endpoint+'?'+params.toString() ,
//    {
//     "headers":{"Authorization":"Bearer " + getToken()}
//   }

// );

//   if (response.ok) {
//     return await response.json(); 
//     }else{
//       throw new Error(response.json().toString());
      
//     }
// }

// export async function deleteCustomerData(id:number): Promise<boolean>{
//   const response = await fetch(endpoint + "/" + id , {
//     method : "DELETE",
//     "headers":{"Authorization":"Bearer " + getToken()}
//   });

//   if (response.ok) {
//     return true; 
//     }else{
//       throw new Error(response.json().toString());
      
//     }
// }

// export async function getCustomerData(id:number):Promise<CustomerDetailModel>{

//  const response = await fetch(endpoint + "/" + id , {
//     method : "GET",
//     "headers": {"Authorization":"Bearer " + getToken()}
//   });
//   if (response.ok) {
//     return response.json(); 
//     }else{
//       throw new Error(response.json().toString());
      
//     }

// }

// export async function updateCustomer(id :number,customer:CustomerInsertModel):Promise<CustomerDatatModel>{

    

//     const response = await fetch(endpoint + "/"+id,{
//       method:"PUT",
//       headers:{
//         "Content-Type":"application/json",
//         "Authorization":"Bearer " + getToken()
//       },
//       body:JSON.stringify(customer)

// });


//     const resData = await response.json();


//     if (response.ok) {
//     return resData as CustomerDatatModel 
//     }else{
//       throw Error(resData)
      
//     }

// }

const endpoint =  "/customer";

export async function insertCustomer(customer:CustomerInsertModel):Promise<CustomerDatatModel>{

    

    const response = await axiosClient.post(endpoint,
      JSON.stringify(customer),
     { headers:{
        "Content-Type":"application/json",
      }
      

});


    const resData = await response.data;


    if (response.status == 201) {
    return resData as CustomerDatatModel 
    }else{
      throw Error(resData)
      
    }

}

export async function getCustomersData (page:number , pageSize:number ,
   name:string , mobile:string , nic:string):Promise<Page<CustomerDatatModel>>{

  const params = new URLSearchParams({
    page:page.toString(),
    size:pageSize.toString(),
    name:name,
    mobile:mobile,
    nic:nic,
    sort:"id,desc"
  });


  const response = await axiosClient.get(endpoint+'?'+params.toString() ,
  

);

  if (response.status == 200) {
    return await response.data; 
    }else{
      throw new Error(response.data.toString());
      
    }
}

export async function deleteCustomerData(id:number): Promise<boolean>{
  const response = await axiosClient.delete(endpoint + "/" + id );

  if (response.status == 204) {
    return true; 
    }else{
      throw new Error(response.data.toString());
      
    }
}

export async function getCustomerData(id:number):Promise<CustomerDetailModel>{

 const response = await axiosClient.get(endpoint + "/" + id );
  if (response.status == 200) {
    return response.data; 
    }else{
      throw new Error(response.data.toString());
      
    }

}

export async function updateCustomer(id :number,customer:CustomerInsertModel):Promise<CustomerDatatModel>{

    

    const response = await axiosClient.put(endpoint + "/"+id,
      JSON.stringify(customer),
     
      {headers:{
        "Content-Type":"application/json"
        
      }
     

});


    const resData = await response.data;


    if (response.status == 200) {
    return resData as CustomerDatatModel 
    }else{
      throw Error(resData)
      
    }

}
