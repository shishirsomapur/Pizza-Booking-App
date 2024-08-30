import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    flatPizzas: []
  },
  reducers: {
    addPizza: (state, action) => {
      const existingPizza = state.pizzas.find(pizza => pizza.pid === action.payload.pid)
      if (existingPizza) {
        existingPizza.quantity += 1
        existingPizza.currentPrice = existingPizza.quantity * existingPizza.price
      } else {
        state.pizzas.push(action.payload)
      }
    },
    updatePizzaQuantity: (state, action) => {
      state.pizzas = action.payload;
    },
    emptyPizza: (state) => {
      state.pizzas = []
    }
  },
});

export const { addPizza, updatePizzaQuantity, emptyPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
