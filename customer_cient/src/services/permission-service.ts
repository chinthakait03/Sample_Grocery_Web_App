import {  axiosClient } from "../configs/api-config";
import type { PermissionModel } from "../models/role-models";


const endpoint =  "/permission";

export async function getPermissionsData() :Promise<PermissionModel[]>{

const response = await axiosClient.get(endpoint);

  if (response.status == 200) {
    return await response.data; 
    }else{
      throw new Error(response.data.toString());
      
    }
}
