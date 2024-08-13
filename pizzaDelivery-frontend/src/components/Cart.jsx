import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza, updatePizzaQuantity } from '../slices/pizzaSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const pizzas = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch()

  const [total, setTotal] = useState()

  useEffect(() => {
    calculateTotal()
  }, [pizzas])


  const handleIncrement = (pid) => {
    const updatedPizzas = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity + 1, currentPrice: item.price * (item.quantity + 1) } : item)

    dispatch(updatePizzaQuantity(updatedPizzas));
  }

  const handleDecrement = (pid) => {
    const updatedPizzas = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity - 1, currentPrice: (item.currentPrice / item.quantity) * (item.quantity - 1) } : item)
      .filter(item => item.quantity > 0)

    dispatch(updatePizzaQuantity(updatedPizzas))
  }

  const calculateTotal = () => {
    let total = pizzas.reduce((acc, item) => acc + item.currentPrice, 0)
    setTotal(total)
  }

  return (
    <div className='flex flex-col w-[350px] h-[350px] fixed right-10 shadow-xl' >
      <div className='p-3 bg-[#EFF2F5]'>Your Cart</div>
      <div className='overflow-y-scroll bg-white h-full'>
        {pizzas.length > 0 ? pizzas.map(item =>
          <div key={item.pid}>
            <div className=' p-3'>
              <div className='flex justify-between'>
                <p>{item.pname}</p>
                <p>&#8377;{item.currentPrice}</p>
              </div>
              <div className='flex justify-end mt-5'>
                <div className='flex w-[80px] justify-between'>
                  <button className='text-2xl border rounded-full border-green-400 text-green-400 h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleDecrement(item.pid)}>-</button>
                  {item.quantity}
                  <button className='text-2xl border rounded-full border-green-400 text-green-400 h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleIncrement(item.pid)}>+</button>
                </div>
              </div>
            </div>
            <hr />
          </div>) : <div className='h-full text-3xl flex items-center justify-center'>Cart is Empty</div>}
      </div>
      <Link to='/checkout'>
        <button className='bg-green-400 w-full p-3 '>CHECKOUT</button>
      </Link>
    </div>
  )
}

export default Cart
