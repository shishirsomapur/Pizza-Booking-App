package com.example.pizza.PizzaDelivery.dto;

import com.example.pizza.PizzaDelivery.model.Orders;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
    private int orderId;
    private int userId;
    private int totalPrice;
    private Date orderDate;
    private List<OrderItemResponseDTO> orderItems;

    public OrderResponseDTO(Orders order, List<OrderItemResponseDTO> orderItems) {
        this.orderId = order.getOrderId();
        this.userId = order.getUserId();
        this.totalPrice = order.getTotalPrice();
        this.orderDate = order.getOrderDate();
        this.orderItems = orderItems;
    }
}

