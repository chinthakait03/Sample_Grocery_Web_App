package lk.chinthakasoftwares.customer_demo.dto;

import java.util.List;

public class RoleDataDTOWithPermission extends RoledataDTO{
    
    private  List <PermissionDTO> permissions;

    public List<PermissionDTO> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<PermissionDTO> permissions) {
        this.permissions = permissions;
    }

    
}
