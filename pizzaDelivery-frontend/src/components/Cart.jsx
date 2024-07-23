import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const orderedVegPizza = useSelector((state) => state.pizza.orderedVegPizza)
  const orderedNonVegPizza = useSelector((state) => state.pizza.orderedNonVegPizza)

  console.log("orderedVegPizza: ",orderedVegPizza)

  return (
    <div>
      
    </div>
  )
}

export default Cart
