package lk.chinthakasoftwares.customer_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.chinthakasoftwares.customer_demo.dto.RoleInsertDTO;
import lk.chinthakasoftwares.customer_demo.dto.RoleInsertResponseDTO;
import lk.chinthakasoftwares.customer_demo.entity.Permission;
import lk.chinthakasoftwares.customer_demo.entity.Role;
import lk.chinthakasoftwares.customer_demo.repository.PermissionRepository;
import lk.chinthakasoftwares.customer_demo.repository.RoleRepository;

@RestController

@RequestMapping ("/roles")
@CrossOrigin

public class RoleController {
    
    @Autowired 
    RoleRepository roleRepository;

    @Autowired 
    PermissionRepository permissionRepository;

    @PostMapping 
    public  RoleInsertResponseDTO add(@RequestBody RoleInsertDTO data ) {

            Role role = new Role();
            role.setName(data.getName());

            List <Permission> permissions = new ArrayList <> ();
            
            for (Integer permissionId: data.getPermissions() ) {
                // Insert Permission Object into permissions list one by one.
                Permission permission = permissionRepository.getReferenceById(permissionId);
                permissions.add(permission);

                System.out.println("Role name: " + data.getName());
                System.out.println("Permissions: " + data.getPermissions());

            }

            role.setPermissions(permissions);
            roleRepository.save(role);

            RoleInsertResponseDTO response = new RoleInsertResponseDTO();
            response.setId(role.getId());
            response.setName(role.getName());

            return response;
    }
}
