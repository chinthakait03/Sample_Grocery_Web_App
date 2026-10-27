package lk.chinthakasoftwares.customer_demo.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import lk.chinthakasoftwares.customer_demo.entity.User;
import lk.chinthakasoftwares.customer_demo.service.AuthUserService;

@Component 
public class AuditorAwareImpl implements AuditorAware <User>{

    @Autowired 
    AuthUserService authUserService;

    @Autowired 
    EntityManager entityManager;
    
    @Override 

    public Optional <User> getCurrentAuditor(){   // this return now loged user Id.

        Authentication authentication =  authUserService.getAuthentication();
        
        if (authentication == null 
            || !authentication.isAuthenticated()
            || authentication instanceof AnonymousAuthenticationToken) {
            

                return Optional.empty();
        }     
        
        if (authentication instanceof JwtAuthenticationToken ) {
            
            return Optional.of(
                entityManager.getReference(User.class,authUserService.getAuthUserId())
            );
        }

        return Optional.empty();

    }
}
