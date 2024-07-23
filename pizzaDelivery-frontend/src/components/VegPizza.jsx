import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addVegPizza } from '../slices/pizzaSlice';

const VegPizza = () => {

    const dispatch = useDispatch();
    const orderedVegPizza = useSelector((state) => state.pizza.orderedVegPizza);
    const [vegPizza, setVegPizza] = useState(null)
    const [notification, setNotification] = useState(false)
    const [orderedPname, setOrderedPname] = useState(null)

    useEffect(() => {
        vegPizzas()
    }, [])


    let vegPizzas = async () => {
        let response = await fetch("http://localhost:8080/vegpizzas")
        setVegPizza(await response.json())
    }

    const addToCart = (pid, pname) => {
        setOrderedPname(pname)
        let pizza = vegPizza.filter(item => { if (item.pid == pid) return item })
        dispatch(addVegPizza(pizza))
        console.log(orderedVegPizza)
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
            setOrderedPname(null)
        }, 3000);
    };

    return (
        <div className='mt-3 p-4 flex flex-col flex-wrap items-center justify-center'>
            <h1 className='text-5xl flex items-center mb-8 '>Veg Pizza</h1>
            <div className='flex flex-wrap justify-center'>
                {vegPizza ? vegPizza.map(item => <div key={item.pid} className='flex flex-col w-72 bg-color m-1'>
                    <img src={item.pimage} className='w-full h-48' alt="" />
                    <div className='flex items-center justify-between  p-3'>
                        <div>
                            <p>{item.pname}</p>
                            <p className='text-xl'>&#8377;{item.price}</p>
                        </div>
                        <div>
                            <button className='bg-orange-500 text-white rounded-full h-10 w-28 mt-4' onClick={() => addToCart(item.pid, item.pname)}>Add To Cart</button>
                            {notification && (
                                <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg transition-opacity duration-300">
                                    {orderedPname} added to the cart!
                                </div>
                            )}
                        </div>
                    </div>
                </div>) : ""}

            </div>
        </div>
    )
}

export default VegPizza
