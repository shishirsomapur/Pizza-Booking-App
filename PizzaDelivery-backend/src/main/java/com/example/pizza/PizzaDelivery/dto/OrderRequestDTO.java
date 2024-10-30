package com.example.pizza.PizzaDelivery.dto;

import com.example.pizza.PizzaDelivery.model.PizzaDetail;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDTO {
    private int userId;
    private int totalPrice;
    private Date orderDate;
    private List<PizzaDetail> pizzaDetails;
}
