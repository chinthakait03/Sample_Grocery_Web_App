package lk.chinthakasoftwares.customer_demo.service;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;


@Service 
public class JwtService {
    

    @Autowired 
    JwtEncoder jwtEncoder;

    @Value ("${security.jwt.expiration}")
    Long jwtExpiration;

    public String generateToken (Authentication authentication){

        Instant now = Instant.now();

        List<String> authorities = authentication

                            .getAuthorities()
                            .stream()
                            .map(GrantedAuthority::getAuthority).toList();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                            .issuer("customer-demo") 
                            .issuedAt(now)   
                            .expiresAt(now.plusSeconds(jwtExpiration))   
                            .subject(authentication.getName())  // username.
                            .claim("authorities", authorities)   
                            .build();       
                            
                            
    

        JwsHeader header = JwsHeader 

                        .with(MacAlgorithm.HS256)
                        .build();

        return jwtEncoder
        
                    .encode(JwtEncoderParameters.from(header,claims)).getTokenValue();

    }

}
