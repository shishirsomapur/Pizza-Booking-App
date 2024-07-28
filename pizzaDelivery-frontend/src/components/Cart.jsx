import { current } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const orderedVegPizza = useSelector((state) => state.pizza.orderedVegPizza)
  const orderedNonVegPizza = useSelector((state) => state.pizza.orderedNonVegPizza)

  const [pizzas, setPizzas] = useState([])
  const [total, setTotal] = useState()

  useEffect(() => {
    updatePizzas()
  }, [orderedVegPizza, orderedNonVegPizza])

  useEffect(() => {
    calculateTotal()
  }, [pizzas])


  const updatePizzas = () => {
    if (orderedVegPizza.length || orderedNonVegPizza.length) {
      let orderedPizzas = orderedVegPizza.concat(orderedNonVegPizza).flat().map(item => ({ ...item, quantity: 1, currentPrice: item.price }))
      setPizzas(orderedPizzas)
    }
  }

  const handleIncrement = (pid) => {
    setPizzas(pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity + 1, currentPrice: item.price * (item.quantity + 1) } : item))
  }

  const handleDecrement = (pid) => {
    setPizzas(pizzas.map(item => item.pid === pid ? { ...item, quantity: Math.max(item.quantity - 1, 0), currentPrice: (item.currentPrice / item.quantity) * (item.quantity - 1) } : item).filter(item => item.quantity > 0))
  }

  const calculateTotal = () => {
    let total = pizzas.reduce((acc, item) => acc + item.currentPrice, 0);
    setTotal(total)
  }

  return (
    <div className='flex flex-col w-[300px] h-[350px] fixed right-10' >
      <div className='p-3 bg-[#EFF2F5]'>Your Cart</div>
      <div className='overflow-auto h-[206px]'>
        {pizzas.length > 0 ? pizzas.map(item =>
          <div key={item.pid}>
            <div className=' p-3'>
              <div className='flex justify-between'>
                <p>{item.pname}</p>
                <p>&#8377;{item.currentPrice}</p>
              </div>
              <div className='flex justify-end mt-5'>
                <div className='flex w-[80px] justify-between'>
                  <button className='text-2xl border rounded-full border-green-400 text-green-400 h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleDecrement(item.pid)} >-</button>
                  {item.quantity}
                  <button className='text-2xl border rounded-full border-green-400 text-green-400 h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleIncrement(item.pid)}>+</button>
                </div>
              </div>
            </div>
            <hr />
          </div>) : <div className='h-full text-3xl flex items-center justify-center'>Cart is Empty</div>}
      </div>
      {total != 0 ?
        <div className='p-3 flex w-full justify-between bg-[#EFF2F5]'>
          <p>Total</p>
          <p>&#8377;{total}</p>
        </div> : ""}
      <button className='bg-green-400 p-3'>Check Out</button>
    </div>
  )
}

export default Cart
