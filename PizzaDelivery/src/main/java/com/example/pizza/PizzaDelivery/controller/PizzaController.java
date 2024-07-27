package com.example.pizza.PizzaDelivery.controller;


import com.example.pizza.PizzaDelivery.model.NonVegPizza;
import com.example.pizza.PizzaDelivery.model.VegPizza;
import com.example.pizza.PizzaDelivery.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class PizzaController {

    @Autowired
    PizzaService service;

    @GetMapping("/vegpizzas")
    public List<VegPizza> getVegPizzas() {
        return service.getVegPizzas();
    }

    @GetMapping("/nonvegpizzas")
    public List<NonVegPizza> getNonVegPizzas() {
        return service.getNonVegPizzas();
    }

}
