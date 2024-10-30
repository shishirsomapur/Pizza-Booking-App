package com.example.pizza.PizzaDelivery.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="non_veg_pizza")
public class NonVegPizza {
    @Id
    private String pid;
    private String pname;
    private int price;
    private String pimage;
}
