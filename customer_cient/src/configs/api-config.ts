import axios from "axios";
import { removeToken } from "../services/auth-service";

export const API_PATH = "http://localhost:8080"; 

export const axiosClient = axios.create({baseURL:API_PATH});

axiosClient.interceptors.request.use(

    (config) => {const token = localStorage.getItem("token");
        if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        return config;
    },
    (error)  => {
        return Promise.reject(error);
    }

    
);


axiosClient.interceptors.response.use(

    (response) => { return response},
    (error)  => {

        if (error.response?.status  === 401) {
            
            removeToken();
        window.location.href = "/login";
        }

        return Promise.reject(error);
        
    }
)