package lk.chinthakasoftwares.customer_demo.dto;

import java.util.List;

public class RoleInsertDTO {
    
    private  String name;
    private  List<Integer> permissions;

    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Integer> getPermissions() {
        return permissions;
    }
    public void setPermissions(List<Integer> permissions) {
        this.permissions = permissions;
    }

    
}
