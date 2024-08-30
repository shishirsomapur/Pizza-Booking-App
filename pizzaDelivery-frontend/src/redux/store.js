import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from '../slices/pizzaSlice'
import userReducer  from '../slices/userSlice'
import loginReducer from '../slices/loginSlice'
import { thunk } from 'redux-thunk'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    user: userReducer,
    login: loginReducer
  }
});
