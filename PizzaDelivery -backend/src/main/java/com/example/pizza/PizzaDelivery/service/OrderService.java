package com.example.pizza.PizzaDelivery.service;

import com.example.pizza.PizzaDelivery.dto.OrderItemResponseDTO;
import com.example.pizza.PizzaDelivery.dto.OrderRequestDTO;
import com.example.pizza.PizzaDelivery.dto.OrderResponseDTO;
import com.example.pizza.PizzaDelivery.model.*;
import com.example.pizza.PizzaDelivery.repo.NonVegPizzaRepo;
import com.example.pizza.PizzaDelivery.repo.OrderItemsRepo;
import com.example.pizza.PizzaDelivery.repo.OrderRepo;
import com.example.pizza.PizzaDelivery.repo.VegPizzaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    OrderItemsRepo orderItemsRepo;

    @Autowired
    VegPizzaRepo vegPizzaRepo;

    @Autowired
    NonVegPizzaRepo nonVegPizzaRepo;

    public void addOrder(OrderRequestDTO orderRequest) {
        Orders order = new Orders();
        order.setUserId(orderRequest.getUserId());
        order.setTotalPrice(orderRequest.getTotalPrice());
        order.setOrderDate(orderRequest.getOrderDate());

        Orders savedOrder = orderRepo.save(order);
        int orderId = savedOrder.getOrderId();

        List<PizzaDetail> pizzaDetails = orderRequest.getPizzaDetails();

        for (PizzaDetail pizzaDetail : pizzaDetails) {
            OrderItems orderItem = new OrderItems();
            orderItem.setOrderId(orderId);
            orderItem.setPizzaId(pizzaDetail.getPizzaId());
            orderItem.setQuantity(pizzaDetail.getQuantity());

            orderItemsRepo.save(orderItem);
        }
    }

    public List<OrderResponseDTO> getOrdersByUserId(int userId) {
        // Fetch the orders for the given userId
        List<Orders> orders = orderRepo.findByUserId(userId);

        // Map each order to an OrderResponseDTO
        return orders.stream()
                .map(order -> {
                    // Fetch the order items for the current order
                    List<OrderItems> items = orderRepo.findOrderItemsByOrderId(order.getOrderId());

                    // Map each order item to OrderItemResponseDTO
                    List<OrderItemResponseDTO> orderItems = items.stream()
                            .map(item -> {
                                String pizzaName = null;

                                // Determine whether the pizza is veg or non-veg and fetch its name
                                if (item.getPizzaId().startsWith("v")) {
                                    pizzaName = vegPizzaRepo.findById(item.getPizzaId())
                                            .map(VegPizza::getPname) // Extract the name if present
                                            .orElse("Unknown Veg Pizza"); // Handle missing pizza case
                                } else {
                                    pizzaName = nonVegPizzaRepo.findById(item.getPizzaId())
                                            .map(NonVegPizza::getPname) // Extract the name if present
                                            .orElse("Unknown Non-Veg Pizza"); // Handle missing pizza case
                                }

                                // Return a new OrderItemResponseDTO with the pizza name and quantity
                                return new OrderItemResponseDTO(pizzaName, item.getQuantity());
                            })
                            .collect(Collectors.toList());

                    // Return a new OrderResponseDTO with the order details and the list of order items
                    return new OrderResponseDTO(order, orderItems);
                })
                .collect(Collectors.toList());
    }

}
