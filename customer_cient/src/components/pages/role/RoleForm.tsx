import { useEffect, useRef, useState } from "react";
import "./RoleForm.scss";
import type { PermissionModel } from "../../../models/role-models";
import { getPermissionsData } from "../../../services/permission-service";

import DualListBox from 'react-dual-listbox';
import { BsChevronDoubleDown, BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronDoubleUp, BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp } from "react-icons/bs";


function RoleForm (){

    const initialized = useRef(false);
    const [permissions ,setPermissions ] = useState<PermissionModel[]>();

   // const [name,setName] = useState("");
    const [selectedPermissions,setSelectedPermissions] = useState<number[]>([]);

    async function loadPermissions () {

        const response = await getPermissionsData();
        setPermissions(response);
    }

    useEffect(() => {
     if (!initialized.current) {
        loadPermissions();
        initialized.current = true;
     }
    }, [])

    function getPermissionOptions () {

      const options = [];

      return options;
    }
    

    return (
        <div>
            <h1>Add new role.</h1>
            <form> 
                <div style={{maxWidth :"500px"}} className="mb-3">
                    <label className="form-lable">Name</label>
                    <input type="text" className="form-control"/>

                </div>
               {permissions && (
                <DualListBox className = "customized-dualListBox"
                options={getPermissionOptions}
                selected={selectedPermissions}
                onChange={(newValue :number[]) => setSelectedPermissions(newValue)}

                icons = {{
                    moveToAvailable: <BsChevronLeft/>,
                    moveAllToAvailable: <BsChevronDoubleLeft/>,
                    moveToSelected: <BsChevronRight/>,
                    moveAllToSelected: <BsChevronDoubleRight/>,
                    moveDown: <BsChevronDown/>,
                    moveUp: <BsChevronUp/>,
                    moveTop: <BsChevronDoubleUp/>,
                    moveBottom: <BsChevronDoubleDown/>

                }}
                canFilter
        />
                
               )}
               
            </form>
        </div>
    )

}

export default RoleForm;
