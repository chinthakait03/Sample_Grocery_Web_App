package lk.chinthakasoftwares.customer_demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lk.chinthakasoftwares.customer_demo.entity.Permission;
import lk.chinthakasoftwares.customer_demo.entity.User;

@Repository 
public interface PermissionRepository extends JpaRepository <Permission,Integer>{

    Optional <User> findByName (String name);
    
}
