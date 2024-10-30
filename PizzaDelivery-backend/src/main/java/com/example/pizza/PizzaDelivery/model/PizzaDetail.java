package com.example.pizza.PizzaDelivery.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PizzaDetail {
    private String pizzaId;
    private Integer quantity;
}
