package lk.chinthakasoftwares.customer_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.chinthakasoftwares.customer_demo.dto.PermissionDTO;
import lk.chinthakasoftwares.customer_demo.entity.Permission;
import lk.chinthakasoftwares.customer_demo.repository.PermissionRepository;

@RestController

@RequestMapping("/permission")
@CrossOrigin
public class PermissionController {
   
    @Autowired 
    PermissionRepository permissionRepository;

    @GetMapping 
    public List <PermissionDTO> getAll () {

        List <Permission> permissions = permissionRepository.findAll(Sort.by(Sort.Direction.ASC , "module"));
        List <PermissionDTO> permissionDTOList = new ArrayList<>();

        for (Permission permission: permissions) {
            PermissionDTO permissionDTO = new PermissionDTO();
            permissionDTO.setId(permission.getId());
            permissionDTO.setName(permission.getName());
            permissionDTO.setModule(permission.getModule());

            permissionDTOList.add(permissionDTO);
        }

        return permissionDTOList;
    }

}
