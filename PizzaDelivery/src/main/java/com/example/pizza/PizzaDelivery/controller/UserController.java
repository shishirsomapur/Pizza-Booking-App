package com.example.pizza.PizzaDelivery.controller;

import com.example.pizza.PizzaDelivery.model.Users;
import com.example.pizza.PizzaDelivery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("register")
    public Users register(@RequestBody Users user) {
        return service.saveUser(user);
    }

}
