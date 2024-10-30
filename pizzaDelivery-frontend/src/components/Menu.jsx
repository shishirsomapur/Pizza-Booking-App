// import React, { useState, useEffect } from 'react'
// import "../App.css"
// import { Link } from 'react-router-dom'

// const Menu = () => {
//     return (
//         <div className='mt-20 w-full '>
//             <h3 className=' flex items-center justify-center text-5xl'>PizzaPalace's Menu</h3>

//             <div className='flex justify-center mt-16 relative '>
//                 <div className=' flex flex-col items-center justify-center z-10 relative'>
//                     <img className="absolute opacity-15 invert z-50" src="src/assets/foodies.avif" alt="" />
//                     <h3 className='text-2xl z-50'>Veg Pizza</h3>
//                     <img className='h-64 w-64' src="src/assets/veg-pizza.jpg" alt="" />
//                     <p>A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
//                     <Link className='z-50' to="/vegpizza"><button className='w-32 mt-2 p-1 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button></Link>
//                 </div>
//                 <div className=' flex flex-col items-center justify-center z-10 relative '>
//                     <img className="absolute opacity-15 invert z-50" src="src/assets/foodies.avif" alt="" />
//                     <h3 className='text-2xl'>Non Veg Pizza</h3>
//                     <img className='h-64 w-64' src="src/assets/non-veg pizza.jpg" alt="" />
//                     <p>Choose your favourite non-veg pizzas from the PizzaPalce's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings</p>
//                     <Link className='z-50' to="/nonvegpizza"><button className='w-32 mt-2 p-1 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Menu

import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='mt-20 w-full px-4 sm:px-6 lg:px-8'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl text-center'>PizzaPalace's Menu</h3>

            <div className='flex flex-col items-center md:flex-row justify-center mt-10 relative '>
                <div className='flex flex-col items-center justify-center mb-12 md:mb-0 md:mr-8 relative md:w-[30%] p-2'>
                    <img className="absolute opacity-15 invert z-0 w-full h-full object-cover" src="src/assets/foodies.avif" alt="" />
                    <div className='relative z-10 text-center'>
                        <h3 className='text-xl sm:text-2xl mb-2'>Veg Pizza</h3>
                        <img className='h-48 w-48 sm:h-64 sm:w-64 mx-auto mb-4' src="src/assets/vegpizza.png" alt="" />
                        <p className='text-sm sm:text-base mb-4'>A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
                        <Link className='z-50' to="/vegpizza">
                            <button className='w-32 p-2 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-12 md:mb-0 md:mr-8 relative md:w-[30%] p-2'>
                    <img className="absolute opacity-15 invert z-0 w-full h-full object-cover" src="src/assets/foodies.avif" alt="" />
                    <div className='relative z-10 text-center'>
                        <h3 className='text-xl sm:text-2xl mb-2'>Non Veg Pizza</h3>
                        <img className='h-48 w-48 sm:h-64 sm:w-64 mx-auto mb-4' src="src/assets/vegpizza.png" alt="" />
                        <p className='text-sm sm:text-base mb-4'>Choose your favourite non-veg pizzas from the PizzaPalace's Pizza menu. </p>
                        <Link className='z-50' to="/nonvegpizza">
                            <button className='w-32 p-2 rounded-full border text-white bg-orange-400 hover:border-orange-400'>View All</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
