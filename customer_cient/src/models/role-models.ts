import type { AuditUserModel } from "./common-models";

export interface RoleDataModel {

    id: number;
    name:string;

}

export interface PermissionModel {

    id: number;
    name:string;
    module:string
}

export interface RoleDataWithPermissionModel extends RoleDataModel {

    permissions: PermissionModel[];

}


export interface RoleDetailModel  extends RoleDataWithPermissionModel{

    createdAt:string;
    updatedAt:string;
    createdBy:AuditUserModel;
    updatedBy:AuditUserModel;

}

export interface RoleInsertModel {

    name:string;
    permissions:number[];
    
}