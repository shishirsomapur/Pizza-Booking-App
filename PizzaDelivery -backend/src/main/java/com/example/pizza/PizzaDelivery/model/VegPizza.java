package com.example.pizza.PizzaDelivery.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="veg_pizza")
public class VegPizza {
    @Id
    private String pid;
    private String pname;
    private int price;
    private String pimage;
}
