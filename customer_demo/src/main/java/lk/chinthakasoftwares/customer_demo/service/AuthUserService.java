package lk.chinthakasoftwares.customer_demo.service;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Scope;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lk.chinthakasoftwares.customer_demo.entity.User;
import lk.chinthakasoftwares.customer_demo.repository.UserRepository;

@Service 
//@Scope ("request")


public class AuthUserService {
    
    // @Autowired (required = false)
    

    @Autowired
    UserRepository userRepository;

   public  Authentication getAuthentication(){
    return SecurityContextHolder
            .getContext()
            .getAuthentication();
   }

    public Integer getAuthUserId(){

        try {
            return Integer.parseInt(getAuthentication().getName());
        } catch (NumberFormatException | NullPointerException e) {
           
            return null;

        }
    }

    public User getAuthUser(){     // user now already log , give

        try {
          return userRepository.findById(getAuthUserId()).orElse(null);

        } catch (Exception e) {
           
            return null;

        }
    }
}
