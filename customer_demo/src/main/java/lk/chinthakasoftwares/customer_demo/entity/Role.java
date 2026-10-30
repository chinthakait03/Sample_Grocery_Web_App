package lk.chinthakasoftwares.customer_demo.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity 
public class Role {
    
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    private  String name;

    @ManyToMany (fetch = FetchType.LAZY)
    @JoinTable (
        name = "role_permission",
        joinColumns = @JoinColumn (name = "role_id"),
        inverseJoinColumns = @JoinColumn (name = "permission_id")
    )
    private List<Permission> permissions;


    @ManyToMany (mappedBy = "roles", fetch = FetchType.LAZY)
    private List<User> users;

    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Permission> getPermissions() {
        return permissions;
    }
    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }

    

}
