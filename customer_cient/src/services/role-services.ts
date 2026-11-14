import {  axiosClient } from "../configs/api-config";
import type { RoleDataWithPermissionModel } from "../models/role-models";

const endpoint = "/roles"

export async function getRolesData() :Promise<RoleDataWithPermissionModel[]>{

const response = await axiosClient.get(endpoint);

  if (response.status == 200) {
    return await response.data; 
    }else{
      throw new Error(response.data.toString());
      
    }
}

export async function deleteRoleData(id:number): Promise<boolean>{
  const response = await axiosClient.delete(endpoint + "/" + id );

  if (response.status == 204) {
    return true; 
    }else{
      throw new Error(response.data.toString());
      
    }
}