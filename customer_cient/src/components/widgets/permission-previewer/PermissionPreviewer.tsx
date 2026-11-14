import type { PermissionModel } from "../../../models/role-models";
import "./PermissionPreviewer.scss"

interface PermissionPreviewProps {
    data : PermissionModel[]
}

function PermissionPreviewer ({data}:PermissionPreviewProps){

    return (
        <ul className="p-0 m-0 d-flex gap-3 flex-wrap align-items-center">
                {data.map((permission) => {
                    return <li className="badge bg-secondary">{permission.name}</li>
                })}
        </ul>
    );
}

export default PermissionPreviewer;