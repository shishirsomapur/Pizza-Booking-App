package com.example.pizza.PizzaDelivery.service;

import com.example.pizza.PizzaDelivery.model.Users;
import com.example.pizza.PizzaDelivery.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);

    public Users saveUser(Users user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

}
