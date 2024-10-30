package com.example.pizza.PizzaDelivery.controller;

import com.example.pizza.PizzaDelivery.dto.OrderRequestDTO;
import com.example.pizza.PizzaDelivery.dto.OrderResponseDTO;
import com.example.pizza.PizzaDelivery.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping(path = "addOrder")
    public void addOrder(@RequestBody OrderRequestDTO orderRequest ) {
        System.out.println(orderRequest);
        orderService.addOrder(orderRequest);
    }

    @GetMapping("getOrders/{userId}")
    public ResponseEntity<List<OrderResponseDTO>> getOrdersByUserId(@PathVariable int userId) {
        List<OrderResponseDTO> orders = orderService.getOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }

}
