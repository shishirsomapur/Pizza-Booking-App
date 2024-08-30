package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.NonVegPizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NonVegPizzaRepo extends JpaRepository<NonVegPizza, String> {

}
