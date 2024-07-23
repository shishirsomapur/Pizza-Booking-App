package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.VegPizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VegPizzaRepo extends JpaRepository<VegPizza, Integer> {

}
