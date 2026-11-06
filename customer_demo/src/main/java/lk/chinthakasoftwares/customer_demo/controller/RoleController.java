package lk.chinthakasoftwares.customer_demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lk.chinthakasoftwares.customer_demo.dto.AuditUserDTO;
import lk.chinthakasoftwares.customer_demo.dto.PermissionDTO;
import lk.chinthakasoftwares.customer_demo.dto.RoleDataDTOWithPermission;
import lk.chinthakasoftwares.customer_demo.dto.RoleDetailDTO;
import lk.chinthakasoftwares.customer_demo.dto.RoleInsertDTO;
import lk.chinthakasoftwares.customer_demo.dto.RoledataDTO;
import lk.chinthakasoftwares.customer_demo.entity.Permission;
import lk.chinthakasoftwares.customer_demo.entity.Role;
import lk.chinthakasoftwares.customer_demo.entity.User;
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
    public  RoledataDTO add(@RequestBody RoleInsertDTO data ) {

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

            RoledataDTO response = new RoledataDTO();
            response.setId(role.getId());
            response.setName(role.getName());

            return response;
    }


    @GetMapping 
    public List< RoleDataDTOWithPermission > getAll(){

      List <Role> roles = roleRepository.findAll();
      List < RoleDataDTOWithPermission > response = new ArrayList<>();

      for (Role role : roles ) {

            RoleDataDTOWithPermission roledataDTO = new RoleDataDTOWithPermission();
            roledataDTO.setId(role.getId());
            roledataDTO.setName(role.getName());
            

            List <Permission> permissions = role.getPermissions();

            List <PermissionDTO> permissionDTOList = new ArrayList<>();

            for (Permission permission : permissions) {
              
              PermissionDTO permissionDTO = new PermissionDTO();
              permissionDTO.setId(permission.getId());
              permissionDTO.setName(permission.getName());
              permissionDTO.setModule(permission.getModule());

              permissionDTOList.add(permissionDTO);

            }
            roledataDTO.setPermissions(permissionDTOList);

            response.add(roledataDTO);
      }

      return response;
    }


    @DeleteMapping ( "/{id}")
    @ResponseStatus (HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Integer id){

      boolean exists = roleRepository.existsById(id);


       if (!exists) {

           throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Role not Found.");
       }
       roleRepository.deleteById(id);
    }


    @PutMapping ( "/{id}")
    public RoledataDTO update( @PathVariable Integer id , @RequestBody RoleInsertDTO data){

      Optional<Role> optionalRole = roleRepository.findById(id);


       if (optionalRole.isEmpty()) {

           throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Role not Found.");
       }

       Role role = optionalRole.get();

       role.setName(data.getName());

       List <Permission> permissions = new ArrayList <> ();
            
            for (Integer permissionId: data.getPermissions() ) {
              
                Permission permission = permissionRepository.getReferenceById(permissionId);
                permissions.add(permission);
            }

            role.setPermissions(permissions);


       roleRepository.save(role);

       RoledataDTO response = new RoledataDTO();
            response.setId(role.getId());
            response.setName(role.getName());

            return response;



    }


    @GetMapping  ("/{id}")
    public RoleDetailDTO getDetials (@PathVariable  Integer id){
         Optional<Role> optionalRole = roleRepository.findById(id);
      if (optionalRole.isEmpty()) {

           throw new ResponseStatusException(HttpStatus.NOT_FOUND , "Role not Found.");
       }

       Role role = optionalRole.get();

       RoleDetailDTO response = new RoleDetailDTO();

       response.setId(role.getId());
       response.setName(role.getName());

       List <Permission> permissions = role.getPermissions();

            List <PermissionDTO> permissionDTOList = new ArrayList<>();

            for (Permission permission : permissions) {
              
              PermissionDTO permissionDTO = new PermissionDTO();
              permissionDTO.setId(permission.getId());
              permissionDTO.setName(permission.getName());
              permissionDTO.setModule(permission.getModule());

              permissionDTOList.add(permissionDTO);

            }
            response.setPermissions(permissionDTOList);

        response.setCreatedAt(role.getCreated_at());
        response.setUpdatedAt(role.getUpdated_at());

        User createdByUser = role.getCreatedBy();

              if (createdByUser != null) {
               
                response.setCreatedBy(new AuditUserDTO(createdByUser.getId(),createdByUser.getDisplayName()));
              }

              

              User updatedByUser = role.getUpdatedBy();
             

              if (updatedByUser != null) {
                response.setUpdatedBy(new AuditUserDTO(updatedByUser.getId(),updatedByUser.getDisplayName()));
              }

              return response;
}


}
