package com.example.pizza.PizzaDelivery.service;

import com.example.pizza.PizzaDelivery.model.NonVegPizza;
import com.example.pizza.PizzaDelivery.model.VegPizza;
import com.example.pizza.PizzaDelivery.repo.NonVegPizzaRepo;
import com.example.pizza.PizzaDelivery.repo.VegPizzaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaService {

    @Autowired
    VegPizzaRepo vegPizzaRepo;

    @Autowired
    NonVegPizzaRepo nonVegPizzaRepo;

    public List<VegPizza> getVegPizzas() {
        return vegPizzaRepo.findAll();
    }

    public List<NonVegPizza> getNonVegPizzas() {
        return nonVegPizzaRepo.findAll();
    }
}
