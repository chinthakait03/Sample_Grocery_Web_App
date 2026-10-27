// package lk.chinthakasoftwares.customer_demo;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// @SpringBootApplication
// public class CustomerDemoApplication {

//     public static void main(String[] args) {

//       //  SpringApplication.run(CustomerDemoApplication.class, args);

//       BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

//       String hashedPassword = passwordEncoder.encode("kushan123");

//       System.out.println(hashedPassword);
//       //$2a$10$GJUVAqWmWB1W8CpVHC5/WuOFnoep7eKB1bG8/psZb00lUhtqi6Tt6  in this have salt
//     }

// }

//





package lk.chinthakasoftwares.customer_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CustomerDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerDemoApplication.class, args);
    }

}
