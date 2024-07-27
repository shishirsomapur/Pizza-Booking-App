package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

    User findByUsername(String username);
}
