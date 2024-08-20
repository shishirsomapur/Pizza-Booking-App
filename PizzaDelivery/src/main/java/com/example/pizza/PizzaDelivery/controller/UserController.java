package com.example.pizza.PizzaDelivery.controller;

import com.example.pizza.PizzaDelivery.model.Users;
import com.example.pizza.PizzaDelivery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping(path="register")
    public Users register(@RequestBody Users user) {
        return service.saveUser(user);
    }

    @PostMapping(path="login")
    public String login(@RequestBody Users user) {
        return service.verify(user);
    }

}
