import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    orderedVegPizza: [],
    orderedNonVegPizza: []
  },
  reducers: {
    addVegPizza: (state, action) => {
      state.orderedVegPizza.push(action.payload);
    },
    addNonVegPizza: (state, action) => {
      state.orderedNonVegPizza.push(action.payload);
    },
  },
});

export const { addVegPizza, addNonVegPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
