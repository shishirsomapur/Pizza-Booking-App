import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../slices/pizzaSlice';
import Cart from './Cart';
import ViewCartBtn from './ViewCartBtn';

const NonVegPizza = () => {

    const dispatch = useDispatch()
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const [nonVegPizza, setNonVegPizza] = useState(null)
    const [notification, setNotification] = useState(false)
    const [orderedPname, setOrderedPname] = useState(null)

    useEffect(() => {
        nonVegPizzas()
    }, [])

    let nonVegPizzas = async () => {
        let response = await fetch("http://localhost:8080/nonvegpizzas")
        setNonVegPizza(await response.json())
    }

    const addToCart = (pid, pname) => {
        setOrderedPname(pname)
        let pizza = nonVegPizza.filter(item => { if (item.pid == pid) return item }).flat().map(item => ({ ...item, quantity: 1, currentPrice: item.price }))
        pizza = pizza[0]
        dispatch(addPizza(pizza))
        setNotification(true);
        setTimeout(() => {
            setNotification(false)
            setOrderedPname(null)
        }, 3000)
    };

    return (
        <div>
            <div className='mt-3 p-4 flex flex-col flex-wrap justify-center items-center xl:items-start absolute top-16 pb-20 md:pb-0'>
                <h1 className='text-5xl flex mb-8 '>Non Veg Pizza</h1>
                <div className='flex justify-center xl:justify-start '>
                    <div className='flex flex-wrap w-[75%] md:w-[81%] lg:w-[61%]'>
                        {nonVegPizza ? nonVegPizza.map(item => <div key={item.pid} className='flex flex-col w-72 bg-color m-1 shadow-xl'>
                            <img src={item.pimage} className='w-full h-48' alt="" />
                            <div className='flex items-center justify-between  p-3'>
                                <div>
                                    <p>{item.pname}</p>
                                    <p className='text-xl'>&#8377;{item.price}</p>
                                </div>
                                <div>
                                    <button className='bg-orange-500 text-white rounded-full h-10 w-28 mt-4' onClick={() => addToCart(item.pid, item.pname)}>Add To Cart</button>
                                    {notification && (
                                        <div className="fixed z-20 top-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg transition-opacity duration-300">
                                            {orderedPname} added to the cart!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>) : ""}
                    </div>
                    <Cart />
                </div>
            </div>
            <ViewCartBtn />
        </div>
        // <div className='mt-3 mb-10 p-4 flex flex-col flex-wrap justify-center absolute top-16'>
        //     <h1 className='text-5xl flex mb-8 '>Non Veg Pizza</h1>
        //     <div className='flex'>
        //         <div className='flex flex-wrap w-[75%]'>
        //             {nonVegPizza ? nonVegPizza.map(item => <div key={item.pid} className='flex flex-col w-72 bg-color m-1 shadow-xl'>
        //                 <img src={item.pimage} className='w-full h-48' alt="" />
        //                 <div className='flex items-center justify-between  p-3'>
        //                     <div>
        //                         <p>{item.pname}</p>
        //                         <p className='text-xl'>&#8377;{item.price}</p>
        //                     </div>
        //                     <div>
        //                         <button className='bg-orange-500 text-white rounded-full h-10 w-28 mt-4' onClick={() => addToCart(item.pid, item.pname)}>Add To Cart</button>
        //                         {notification && (
        //                             <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg transition-opacity duration-300 z-20">
        //                                 {orderedPname} added to the cart!
        //                             </div>
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>) : ""}
        //         </div>
        //         <Cart/>
        //     </div>
        // </div>
    )
}

export default NonVegPizza
