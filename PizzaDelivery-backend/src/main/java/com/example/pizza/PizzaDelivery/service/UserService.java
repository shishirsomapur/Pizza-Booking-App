package com.example.pizza.PizzaDelivery.service;

import com.example.pizza.PizzaDelivery.model.Users;
import com.example.pizza.PizzaDelivery.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authManager;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public Users saveUser(Users user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public String verify(Users user) {
        Authentication authentication = authManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        String token = null;

//        if(authentication.isAuthenticated())
//            return jwtService.generateToken(user.getUsername());
//        else
//            return "Login Failed";

        if(authentication.isAuthenticated()) {
            token =  jwtService.generateToken(user.getUsername());
            Users verifiedUser = repo.findByUsername(user.getUsername());
            System.out.println(token);
            return token + ":" +verifiedUser.getId();
        }
        else
            return "Login Failed";
    }

}
