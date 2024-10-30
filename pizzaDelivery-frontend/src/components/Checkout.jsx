// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { updatePizzaQuantity } from '../slices/pizzaSlice'
// import Address from './Address'
// import { Link } from 'react-router-dom'

// const Checkout = () => {
//     const pizzas = useSelector((state) => state.pizza.pizzas)
//     const [totalPrice, setTotalPrice] = useState(0)
//     const [addressModal, setAddressModal] = useState(false)
//     const [totalItems, setTotalItems] = useState(0)
//     const username = useSelector((state) => state.user.username)
//     const loginStatus = useSelector((state) => state.login.loginStatus)

//     const dispatch = useDispatch()

//     useEffect(() => {
//         calculateTotal()
//     }, [pizzas])

//     useEffect(() => {
//         if (addressModal) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [addressModal]);

//     const handleIncrement = (pid) => {
//         const updatePizza = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity + 1, currentPrice: item.price * (item.quantity + 1) } : item)
//         dispatch(updatePizzaQuantity(updatePizza))
//     }

//     const handleDecrement = (pid) => {
//         const updatePizza = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity - 1, currentPrice: item.price * (item.quantity - 1) } : item).filter(item => item.quantity > 0)
//         dispatch(updatePizzaQuantity(updatePizza))
//     }

//     const calculateTotal = () => {
//         let totalPrice = pizzas.reduce((acc, item) => acc + item.currentPrice, 0)
//         let TotalItems = pizzas.reduce((acc, item) => acc + item.quantity, 0)
//         setTotalPrice(totalPrice)
//         setTotalItems(TotalItems)
//     }

//     const checkLoginStatus = () => {
//         if (username == null)
//             alert("Please Login")
//         else setAddressModal(true)
//     }

//     return (
//         <div className='mt-16 flex flex-col'>
//             {pizzas.length > 0 ?
//                 <div className='flex w-full'>
//                     <div className='w-[60%] pl-8 mt-8'>
//                         <div className="flex justify-between items-center p-1 pb-5">
//                             <p className=" font-semibold text-gray-700">{totalItems} Items you have selected</p>
//                             <p>
//                                 <Link to="/menu" className="text-orange-500 font-semibold ">
//                                     Explore Menu
//                                 </Link>
//                             </p>
//                         </div>
//                         <div>
//                             {pizzas.map(item =>
//                                 <div key={item.pid} className='bg-white p-5 flex mb-4 justify-between rounded shadow-md'>
//                                     <div className='flex'>
//                                         <img className="w-[130px] h-[90px] object-cover rounded" src={item.pimage} alt={item.pname} />
//                                         <div className='pl-5'>
//                                             <p className='font-semibold'> {item.pname} </p>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div>
//                                             <p className='font-semibold text-orange-600 mb-3 flex items-end justify-end'>&#8377; {item.currentPrice}</p>
//                                         </div>
//                                         <div className='flex'>
//                                             <button className='text-2xl border rounded-full border-black  h-[25px] w-[25px] flex items-center justify-center mr-2' onClick={() => handleDecrement(item.pid)}>-</button>
//                                             <p className=''>{item.quantity}</p>
//                                             <button className='text-2xl border rounded-full border-black h-[25px] w-[25px] flex items-center justify-center ml-2' onClick={() => handleIncrement(item.pid)}>+</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     <div className=' mt-8 w-[30%] flex items-center justify-center bg-zinc-200 flex-col fixed right-10 rounded-md'>
//                         <div className='font-semibold w-[100%] flex justify-center p-2 '>
//                             <h2>PRICE DETAILS</h2>
//                         </div>
//                         <div className='w-[100%] pt-5 pl-3 pr-3 flex justify-between'>
//                             <p>Total Price</p>
//                             <p>&#8377; {totalPrice}</p>
//                         </div>
//                         <div className='w-[100%] pt-5 pl-3 pr-3 flex justify-between'>
//                             <p>Shipping</p>
//                             <p>&#8377; 0</p>
//                         </div>
//                         <hr className='h-[1.5px] bg-gray-100 w-[95%] m-2 shadow-md' />
//                         <div className='w-[100%] flex justify-between pt-5 pl-3 pr-3 pb-3' >
//                             <h2 className='font-bold'>Grand Total <p>(including Tax & Charge)</p></h2>
//                             <h2 className='font-bold'>&#8377; {totalPrice}</h2>
//                         </div>
//                         <button className='bg-orange-400 w-[95%] m-5 p-3 rounded-md font-bold text-white' onClick={() => checkLoginStatus()}> PLACE ORDER</button>
//                     </div>
//                     {addressModal && <Address onClose={() => setAddressModal(false)} />}
//                 </div> :
//                 <div className='bg-white flex items-center justify-center flex-col p-20 mt-28 m-10 '>
//                     <img className='h-52' src="src\assets\pizza-basket.png" alt="" />
//                     <p className='uppercase text-2xl text-slate-400 font-bold mb-2'>Your Cart is Empty</p>
//                     <p className=' leading-5 text-slate-400 font-semibold'>Please add some items from the menu.</p>
//                     <Link to="/menu">
//                         <button className='uppercase mt-4 p-2 rounded bg-orange-400 text-white'>Explore Menu</button>
//                     </Link>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Checkout

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePizzaQuantity } from '../slices/pizzaSlice'
import Address from './Address'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const [totalPrice, setTotalPrice] = useState(0)
    const [addressModal, setAddressModal] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const username = useSelector((state) => state.user.username)
    const loginStatus = useSelector((state) => state.login.loginStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        calculateTotal()
    }, [pizzas])

    useEffect(() => {
        if (addressModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [addressModal]);

    const handleIncrement = (pid) => {
        const updatePizza = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity + 1, currentPrice: item.price * (item.quantity + 1) } : item)
        dispatch(updatePizzaQuantity(updatePizza))
    }

    const handleDecrement = (pid) => {
        const updatePizza = pizzas.map(item => item.pid === pid ? { ...item, quantity: item.quantity - 1, currentPrice: item.price * (item.quantity - 1) } : item).filter(item => item.quantity > 0)
        dispatch(updatePizzaQuantity(updatePizza))
    }

    const calculateTotal = () => {
        let totalPrice = pizzas.reduce((acc, item) => acc + item.currentPrice, 0)
        let TotalItems = pizzas.reduce((acc, item) => acc + item.quantity, 0)
        setTotalPrice(totalPrice)
        setTotalItems(TotalItems)
    }

    const checkLoginStatus = () => {
        if (username == null)
            alert("Please Login")
        else setAddressModal(true)
    }

    return (
        <div className='mt-16 flex flex-col'>
            {pizzas.length > 0 ?
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='w-full md:w-[60%] p-2 md:pl-8 mt-4 md:mt-8'>
                        <div className="flex justify-between items-center p-1 pb-5">
                            <p className="font-semibold text-gray-700">{totalItems} Items you have selected</p>
                            <p>
                                <Link to="/menu" className="text-orange-500 font-semibold ">
                                    Explore Menu
                                </Link>
                            </p>
                        </div>
                        <div>
                            {pizzas.map(item =>
                                <div key={item.pid} className='bg-white p-3 md:p-5 flex mb-4 justify-between rounded shadow-md'>
                                    <div className='flex'>
                                        <img className="w-[100px] md:w-[130px] h-[70px] md:h-[90px] object-cover rounded" src={item.pimage} alt={item.pname} />
                                        <div className='pl-3 md:pl-5'>
                                            <p className='font-semibold'> {item.pname} </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-semibold text-orange-600 mb-3'>&#8377; {item.currentPrice}</p>
                                        <div className='flex'>
                                            <button className='text-xl md:text-2xl border rounded-full border-black h-[25px] w-[25px] flex items-center justify-center mr-2' onClick={() => handleDecrement(item.pid)}>-</button>
                                            <p className=''>{item.quantity}</p>
                                            <button className='text-xl md:text-2xl border rounded-full border-black h-[25px] w-[25px] flex items-center justify-center ml-2' onClick={() => handleIncrement(item.pid)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-4 md:mt-8 w-full md:w-[30%] flex items-center justify-center bg-zinc-200 flex-col md:fixed md:right-10 rounded-md p-4'>
                        <div className='font-semibold w-full flex justify-center p-2'>
                            <h2>PRICE DETAILS</h2>
                        </div>
                        <div className='w-full pt-5 flex justify-between'>
                            <p>Total Price</p>
                            <p>&#8377; {totalPrice}</p>
                        </div>
                        <div className='w-full pt-5 flex justify-between'>
                            <p>Shipping</p>
                            <p>&#8377; 0</p>
                        </div>
                        <hr className='h-[1.5px] bg-gray-100 w-[95%] m-2 shadow-md' />
                        <div className='w-full flex justify-between pt-5 pb-3'>
                            <h2 className='font-bold'>Grand Total <p>(including Tax & Charge)</p></h2>
                            <h2 className='font-bold'>&#8377; {totalPrice}</h2>
                        </div>
                        <button className='bg-orange-400 w-full m-5 p-3 rounded-md font-bold text-white' onClick={() => checkLoginStatus()}> PLACE ORDER</button>
                    </div>
                    {addressModal && <Address onClose={() => setAddressModal(false)} />}
                </div> :
                <div className='bg-white flex items-center justify-center flex-col p-10 md:p-20 mt-16 md:mt-28 m-4 md:m-10'>
                    <img className='h-40 md:h-52' src="src/assets/pizza-basket.png" alt="" />
                    <p className='uppercase text-xl md:text-2xl text-slate-400 font-bold mb-2'>Your Cart is Empty</p>
                    <p className='leading-5 text-slate-400 font-semibold'>Please add some items from the menu.</p>
                    <Link to="/menu">
                        <button className='uppercase mt-4 p-2 rounded bg-orange-400 text-white'>Explore Menu</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Checkout
