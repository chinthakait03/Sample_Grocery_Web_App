package lk.chinthakasoftwares.customer_demo.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity 
public class Permission {
    
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
     private String module;

     @ManyToMany (mappedBy = "permissions", fetch = FetchType.LAZY)
     List <Role> roles;

     
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
     public String getModule() {
         return module;
     }
     public void setModule(String module) {
         this.module = module;
     }
     public List<Role> getRoles() {
         return roles;
     }
     public void setRoles(List<Role> roles) {
         this.roles = roles;
     }

}
