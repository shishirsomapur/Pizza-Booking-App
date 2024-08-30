package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users, Integer> {

    Users findByUsername(String username);
}
