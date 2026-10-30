package lk.chinthakasoftwares.customer_demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lk.chinthakasoftwares.customer_demo.entity.User;

@Repository 
public interface UserRepository extends JpaRepository<User ,Integer> {


    Optional <User> findByMobile (String mobile);
    Optional <User> findByNic (String nic);
    Optional <User> findByEmail (String email);
    Optional <User> findByMobileOrNicOrEmail (String mobile ,String nic,String email);
    

    
}
