import { API_PATH } from "../configs/api-config";
import type { LoginResponseModel, UserLoginModel } from "../models/auth-models";

export async function login( loginModel:UserLoginModel){

        const endpoint = API_PATH + "/login" ; 


        const response = await fetch(endpoint,{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(loginModel)
        
        });
        
        
            const resData = await response.json();
        
        
            if (response.ok) {
            return resData as LoginResponseModel 
            }else{
              throw Error(resData)
              
            }

}


export function setToken ( token:string) {

    localStorage.setItem ( "token" , token);
}


export function getToken ( ) {

   return localStorage.getItem ( "token");
}

export function removeToken () {

    localStorage.removeItem ( "token");
}