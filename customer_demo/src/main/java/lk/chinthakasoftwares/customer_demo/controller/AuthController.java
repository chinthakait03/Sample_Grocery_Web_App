// package lk.chinthakasoftwares.customer_demo.controller;

// import java.nio.charset.StandardCharsets;
// import java.security.MessageDigest;
// import java.security.NoSuchAlgorithmException;
// import java.util.HexFormat;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import lk.chinthakasoftwares.customer_demo.dto.UserLoginDTO;
// import lk.chinthakasoftwares.customer_demo.entity.User;
// import lk.chinthakasoftwares.customer_demo.repository.UserRepository;

// @CrossOrigin 
// @RestController 
// public class AuthController {

// @Autowired 
// UserRepository userRepository;

// @PostMapping("/login")    
// public String login(@RequestBody UserLoginDTO userLoginDTO) {
    
//     // System.out.println(userLoginDTO.getUsername());
//     // System.out.println(userLoginDTO.getPassword());

//     String username = userLoginDTO.getUsername(); 
//     String password = userLoginDTO.getPassword();

//     // user add karana data deka.

//     Optional <User> optionalUser = userRepository.findById(username);  // db eke inna userta samana da kiyala balana eka .samana data ekak thibboth eka ewanawa.

//     if (optionalUser.isPresent()) {
//         User user = optionalUser.get();

//         String hashedPassword =md5(password);


//         if (user.getPassword().equals(hashedPassword) ) {
//            return "Authetication Ok";
//         }else
//         {
//             return "Password wrong.";
//         }


//     }else
//     {
//         return "Authetication Failed.";
//     }

//  }
 


//  public static String md5 (String value){
//     try {

//         MessageDigest md = MessageDigest.getInstance("MD5");

//         byte[] hash = md.digest(value.getBytes(StandardCharsets.UTF_8));

//         return HexFormat.of().formatHex(hash);

//     } catch (NoSuchAlgorithmException e) {
//        throw new  RuntimeException(e);
//     }
//  }
    
// }

// package lk.chinthakasoftwares.customer_demo.controller;

// import java.nio.charset.StandardCharsets;
// import java.security.MessageDigest;
// import java.security.NoSuchAlgorithmException;
// import java.util.Date;
// import java.util.HexFormat;
// import java.util.Optional;

// import javax.crypto.SecretKey;

// import org.springframework.beans.factory.annotation.Autowired;
// //import org.springframework.beans.factory.annotation.Qualifier;
// //import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestHeader;

// import org.springframework.web.bind.annotation.RestController;

// // import io.jsonwebtoken.Claims;
// // import io.jsonwebtoken.Jwts;
// // import io.jsonwebtoken.security.Keys;
// import lk.chinthakasoftwares.customer_demo.dto.UserLoginDTO;
// import lk.chinthakasoftwares.customer_demo.entity.User;
// import lk.chinthakasoftwares.customer_demo.repository.UserRepository;


// @CrossOrigin 
// @RestController 
// public class AuthController {


//   final static  String secret = "my-super-secret-key-for-jwt-demo-1234567";

    

// //  child parent classes manage karaddi use karanawa.



//     //@Autowired 
//     // @Qualifier (dog)
//     // Animal animal;
   

// @Autowired 
// UserRepository userRepository;

// @Autowired
// PasswordEncoder encoder ;



// @PostMapping("/login")    
// public String login(@RequestBody UserLoginDTO userLoginDTO) {
    
//     // System.out.println(userLoginDTO.getUsername());
//     // System.out.println(userLoginDTO.getPassword());

//     String username = userLoginDTO.getUsername(); 
//     String password = userLoginDTO.getPassword();

//     // user add karana data deka.

//     Optional <User> optionalUser = userRepository.findByMobileOrNicOrEmail(username,username,username);  // db eke inna userta samana da kiyala balana eka .samana data ekak thibboth eka ewanawa.


//     if (optionalUser.isPresent()) {

//         User user = optionalUser.get();

        
       


//         if ( encoder.matches(  password ,user.getPassword() ))  {
           
            
//             SecretKey key = Keys.hmacShaKeyFor(
//                 secret.getBytes(StandardCharsets.UTF_8)
//             );

//             String token = Jwts.builder()
//                     .subject(user.getId())
//                     .claim("mobile",user.getMobile())
//                     .claim("nic", user.getNic())
//                     .claim("email", user.getEmail())
//                     .issuedAt(new Date())
//                     .expiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000))
//                     .signWith(key)
//                     .compact();

//                 return token;    

//         }else
//         {
//             return "Password wrong.";
//         }


//     }else
//     {
//         return "Authetication Failed.";
//     }

//  }

// @GetMapping ("/user-details")
//  public  void getUserDetail(@RequestHeader("Authorization") String token){
    
//     SecretKey key = Keys.hmacShaKeyFor(
//                 secret.getBytes(StandardCharsets.UTF_8)
//             );

//     Claims claims = Jwts.parser()
//                 .verifyWith(key)
//                 .build()
//                 .parseSignedClaims(token)
//                 .getPayload();

//     System.out.println(claims.getSubject());  
//     System.out.println(claims.get("mobile"));
//     System.out.println(claims.get("nic"));
//     System.out.println(claims.get("email"));         
//  }
 


//  public static String md5 (String value){
//     try {

//         MessageDigest md = MessageDigest.getInstance("MD5");

//         byte[] hash = md.digest(value.getBytes(StandardCharsets.UTF_8));

//         return HexFormat.of().formatHex(hash);

//     } catch (NoSuchAlgorithmException e) {
//        throw new  RuntimeException(e);
//     }
//  }
    
// }


package lk.chinthakasoftwares.customer_demo.controller;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import java.util.HexFormat;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import org.springframework.web.bind.annotation.RestController;

import lk.chinthakasoftwares.customer_demo.dto.LoginResponseDTO;
// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.security.Keys;
import lk.chinthakasoftwares.customer_demo.dto.UserLoginDTO;

import lk.chinthakasoftwares.customer_demo.service.JwtService;


@CrossOrigin 
@RestController 
public class AuthController {


 

    

//  child parent classes manage karaddi use karanawa.



    //@Autowired 
    // @Qualifier (dog)
    // Animal animal;
   



@Autowired 
AuthenticationManager authenticationManager;


@Autowired 
JwtService jwtService;



@PostMapping("/login")    
public LoginResponseDTO login(@RequestBody UserLoginDTO userLoginDTO) {
    
    Authentication authentication = authenticationManager.authenticate(
        UsernamePasswordAuthenticationToken.unauthenticated(userLoginDTO.getUsername(), userLoginDTO.getPassword())
    );

    String token = jwtService.generateToken(authentication);

    LoginResponseDTO responseDTO =new LoginResponseDTO();
    responseDTO.setToken(token);

    return responseDTO;

 }




@GetMapping ("/user-details")
 public  void getUserDetail(@RequestHeader("Authorization") String token){
    
    // SecretKey key = Keys.hmacShaKeyFor(
    //             secret.getBytes(StandardCharsets.UTF_8)
    //         );

    // Claims claims = Jwts.parser()
    //             .verifyWith(key)
    //             .build()
    //             .parseSignedClaims(token)
    //             .getPayload();

    // System.out.println(claims.getSubject());  
    // System.out.println(claims.get("mobile"));
    // System.out.println(claims.get("nic"));
    // System.out.println(claims.get("email"));         
 }
 


 public static String md5 (String value){
    try {

        MessageDigest md = MessageDigest.getInstance("MD5");

        byte[] hash = md.digest(value.getBytes(StandardCharsets.UTF_8));

        return HexFormat.of().formatHex(hash);

    } catch (NoSuchAlgorithmException e) {
       throw new  RuntimeException(e);
    }
 }
    
}