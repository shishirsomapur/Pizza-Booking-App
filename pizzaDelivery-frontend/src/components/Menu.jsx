import React, { useState, useEffect } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='mt-4 absolute top-16'>
            <h3 className=' flex items-center justify-center text-5xl'>PizzaPalace's Menu</h3>

            <div className='flex justify-center mt-16 relative '>
                <div className='w-1/3 flex flex-col items-center justify-center z-10 relative'>
                    <img className="absolute opacity-15 invert z-50" src="src/assets/foodies.avif" alt="" />
                    <h3 className='text-2xl z-50'>Veg Pizza</h3>
                    <img className='h-64 w-64' src="src/assets/veg-pizza.jpg" alt="" />
                    <p>A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
                    <Link className='z-50' to="/vegpizza"><button className='w-32 mt-2 p-1 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button></Link>
                </div>
                <div className='w-1/3 flex flex-col items-center justify-center z-10 relative '>
                    <img className="absolute opacity-15 invert z-50" src="src/assets/foodies.avif" alt="" />
                    <h3 className='text-2xl'>Non Veg Pizza</h3>
                    <img className='h-64 w-64' src="src/assets/non-veg pizza.jpg" alt="" />
                    <p>Choose your favourite non-veg pizzas from the PizzaPalce's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings</p>
                    <Link className='z-50' to="/nonvegpizza"><button className='w-32 mt-2 p-1 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu

