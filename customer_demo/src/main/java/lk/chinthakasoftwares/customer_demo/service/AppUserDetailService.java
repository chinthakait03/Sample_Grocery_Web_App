package lk.chinthakasoftwares.customer_demo.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import jakarta.annotation.Nullable;
import lk.chinthakasoftwares.customer_demo.entity.User;
import lk.chinthakasoftwares.customer_demo.repository.UserRepository;

@Service 
public class AppUserDetailService  implements UserDetailsService{


    @Autowired 
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       
      Optional <User> optionalUser = userRepository.findByMobileOrNicOrEmail(username,username,username);

      if (optionalUser.isEmpty()) {
        throw UsernameNotFoundException.fromUsername(username);
      }

      User user = optionalUser.get();

      UserDetails userDetails = new UserDetails(){

        @Override 
        public Collection<? extends  GrantedAuthority> getAuthorities(){
          return List.of();
        }

        @Override 
        public @Nullable  String getPassword(){
          return user.getPassword();
        }

        @Override 
        public @Nullable  String getUsername(){
         // return username;
            return user.getId().toString();
        }

        

      };

      return userDetails;

      
    }
   
    

}
