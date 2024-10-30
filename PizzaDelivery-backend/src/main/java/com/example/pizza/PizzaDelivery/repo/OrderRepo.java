package com.example.pizza.PizzaDelivery.repo;

import com.example.pizza.PizzaDelivery.model.OrderItems;
import com.example.pizza.PizzaDelivery.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<Orders, Integer> {

    List<Orders> findByUserId(int userId);
    @Query("SELECT o FROM OrderItems o WHERE o.orderId = :orderId")
    List<OrderItems> findOrderItemsByOrderId(int orderId);

}
