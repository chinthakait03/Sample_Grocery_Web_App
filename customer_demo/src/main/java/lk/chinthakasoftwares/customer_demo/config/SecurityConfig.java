package lk.chinthakasoftwares.customer_demo.config;

import java.nio.charset.StandardCharsets;
//import java.util.Base64;
import java.util.List;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration 
public class SecurityConfig {

    @Value ("${x}")    
    Integer data;


    @Value ("${security.jwt.secret}")
    private String jwtSecret;
 
    @Bean 
    public SecurityFilterChain securityFilterChain ( 
        HttpSecurity http ,JwtAuthenticationConverter jwtAuthenticationConverter) throws Exception {
        // http 
        //      .csrf(csrf -> csrf.disable()).authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
        //     return  http.build();
        //     }

        http 
             .cors(cors -> cors.configurationSource(corsConfigurationSource()))
             .csrf(csrf -> csrf.disable())

             .sessionManagement(
                session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
             
             
             .authorizeHttpRequests(auth -> auth
                .requestMatchers("/login").permitAll()
                // .requestMatchers("/logout").permitAll()
                // .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated())


                .oauth2ResourceServer(oauth2 -> 
                    oauth2.jwt(jwt  -> jwt
                        .jwtAuthenticationConverter(jwtAuthenticationConverter))
                );
            return  http.build();
            }

     @Bean 
     public  CorsConfigurationSource corsConfigurationSource  () {

        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
     }   



    @Bean
    public  PasswordEncoder passwordEncoder(){

       //System.out.println(data);
       
        return new BCryptPasswordEncoder();
    }  
    
    @Bean 

    public AuthenticationManager authenticationManager( UserDetailsService userDetailsService , PasswordEncoder passwordEncoder){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder);
        return new ProviderManager(provider);
    }

    @Bean 
    public SecretKey jSecretKey(){


        byte[] keyBytes = jwtSecret.getBytes(StandardCharsets.UTF_8);

        return new SecretKeySpec(keyBytes, "HmacSHA256");

        // asign part  --> sha256
    }


    @Bean 
    public  JwtEncoder jwtEncoder(SecretKey secretKey){

        return NimbusJwtEncoder
                .withSecretKey(secretKey)
                .algorithm(MacAlgorithm.HS256)
                .build();
    }


    @Bean 
    public JwtDecoder jwtDecoder(SecretKey secretKey){

        return NimbusJwtDecoder

            .withSecretKey(secretKey)
            .macAlgorithm(MacAlgorithm.HS256)
            .build();
    }

    @Bean 
    public JwtAuthenticationConverter jwtAuthenticationConverter(){

        JwtGrantedAuthoritiesConverter authoritiesConverter = new JwtGrantedAuthoritiesConverter();
        authoritiesConverter.setAuthoritiesClaimName("authorities");

        authoritiesConverter.setAuthorityPrefix("");
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();

        converter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);



        return  converter;

    }
}
