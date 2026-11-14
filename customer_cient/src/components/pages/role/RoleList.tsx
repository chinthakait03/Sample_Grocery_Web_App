import { NavLink, useNavigate } from "react-router-dom";
import "./RoleList.scss";
import { useEffect, useRef, useState } from "react";
import type { RoleDataWithPermissionModel } from "../../../models/role-models";
import { deleteRoleData, getRolesData } from "../../../services/role-services";
import PermissionPreviewer from "../../widgets/permission-previewer/PermissionPreviewer";
import { BsFillTrash3Fill, BsInfoCircle, BsPencilSquare } from "react-icons/bs";

function RoleList () {


    const navigate = useNavigate();
    const initialized = useRef(false);

  const [roles , setRoles] = useState<RoleDataWithPermissionModel[]>();

    async function loadRoles (){
        const response = await getRolesData();
        setRoles(response);
    }

    async function deleteRole(id:number){
    
        try {
          await deleteRoleData(id);
          loadRoles();
        } catch (e) {
          
          console.log(e);
          
          alert("Not success")
        }
        
    
      }

    useEffect(() => {
     if(!initialized.current){
        loadRoles();
        initialized.current = true;
     }
    }, [])
    

    return (
        <div className="role-list">
            <div className="d-flex align-items-center gap-5 justify-content-between mb-4">
                 <h1 className="m-0">Role List</h1>
                 <NavLink to="/roles/add" className="btn btn-primary"> Add Role</NavLink>
            </div>
           
            <div>
                {roles &&  
                 (<table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Permissions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => {
                            return (
                        <tr key={role.id}>
                        <td className="py-3">{role.id}</td>
                        <td className="py-3">{role.name}</td>
                        <td className="py-3" permission-cell><PermissionPreviewer data =  {role.permissions}/></td>
                        <td>
                            <div className="d-flex gap-3 justify-content-end">
                            
                                                  <button  className="btn btn-warning btn-sm d-inline-flex align-item-center gap-1"> <BsPencilSquare/> Edit</button>
                                                  <button className="btn btn-danger btn-sm d-inline-flex align-item-center gap-1" 
                                                   onClick={() => deleteRole(role.id)}>  <BsFillTrash3Fill /> Delete</button>
                                                  <button className="btn btn-info btn-sm d-inline-flex align-item-center gap-1" 
                                                   >  <BsInfoCircle />  Detail</button>
                                                  </div>
                        </td> 
                        </tr> 
                            )
                        })}
                        
                        
                    </tbody>
                </table>) }
               
            </div>
        </div>
    )

}

export default RoleList;