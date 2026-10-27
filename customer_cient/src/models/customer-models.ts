export interface CustomerInsertModel{

    name:string
    nic?:string
    mobile:string
    dob?:string
    gender?:string
    city?:string
}

export interface CustomerDatatModel{

    id:number
    name:string
    mobile:string
    nic?:string
    city?:string
   
    
}

export interface CustomerDetailModel extends CustomerDatatModel{

    gender?:string;
    dob?:string;
    createdAt?:string;
    updatedAt?:string;
   
    
}


