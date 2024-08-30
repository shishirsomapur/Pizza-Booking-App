package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemsRepo extends JpaRepository<OrderItems, Integer> {
    List<OrderItems> findByOrderId(int orderId);
}
