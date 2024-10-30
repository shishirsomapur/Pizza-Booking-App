// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FaArrowLeftLong } from "react-icons/fa6";

// const Orders = () => {

//     const [orders, setOrders] = useState([])
//     const userId = useSelector((state) => state.user.userId)
//     const token = localStorage.getItem('token')

//     useEffect(() => {
//         getOrders()
//     }, [])

//     const getOrders = async () => {
//         try {
//             let response = await fetch(`http://localhost:8080/getOrders/${userId}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//             response = await response.json()
//             console.log(response)
//             setOrders(response)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const formatDate = (dateStr) => {
//         const date = new Date(dateStr);

//         const options = {
//             day: '2-digit',
//             month: 'short',
//             year: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             hour12: false
//         };

//         const formattedDate = date.toLocaleString('en-GB', options).replace(',', '');

//         return formattedDate
//     }

//     return (
//         <div className='w-full h-screen bg-white'>
//             <div className='flex justify-between pr-10 w-[100%] fixed top-0 bg-white border-b'>
//                 <div className='flex text-2xl items-center pl-3 p-3'>
//                     <Link to='/profile'>
//                         <FaArrowLeftLong className='w-5 h-5' />
//                     </Link>
//                     <p className='pl-3'>My Orders</p>
//                 </div>

//                 {orders.length > 0 ?
//                     <div className='absolute mt-20 m-5 flex flex-wrap'>
//                         {orders.map((order) =>
//                             <div className='w-full md:w-[500px] bg-white border-2 rounded-lg shadow-md mb-5 mr-5'>
//                                 <div className=' p-3'>
//                                     <div className='flex items-center justify-between'>
//                                         <p className='font-bold'> Delivery </p>
//                                         <p className='text-green p-[2px] bg-lime-100 text-xs text-green-700 font-bold rounded border-2'>DELIVERED</p>
//                                     </div>
//                                     <p className='text-xs pt-[2px] pb-[2px]'>Order #{order.orderId}</p>
//                                     <p className='text-xs pt-[2px] pb-[2px]'>{formatDate(order.orderDate)}</p>
//                                 </div>
//                                 <hr className='' />
//                                 <div className='p-3'>
//                                     {order.orderItems.map((item, index) => (
//                                         <div className='flex justify-between items-center mb-2 '>
//                                             <p className='text-sm'>{item.pizzaName}</p>
//                                             <p>{item.quantity}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <hr className='' />
//                                 <div className='p-3'>
//                                     <div className='flex justify-between items-center'>
//                                         <p className='font-bold'>{order.totalPrice}</p>
//                                         <button className='bg-rose-600  text-white font-semibold pl-3 pr-3 p-1 rounded-md'>Reorder</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div> :
//                     <div className='absolute mt-16 flex items-center justify-center flex-col'>
//                         <img className='w-[30%]' src="src\assets\pizza.webp" alt="" />
//                         <p className='font-bold mb-8'>Seems like you have not ordered from PizzaPalace in the recent past</p>
//                         <p>Place your order now</p>
//                         <Link to="/menu">
//                             <button className='uppercase mt-4 p-2 rounded bg-orange-400 text-white'>Explore Menu</button>
//                         </Link>
//                     </div>
//                 }

//             </div>
//         </div>
//     )
// }

// export default Orders


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const userId = useSelector((state) => state.user.userId);
    const token = localStorage.getItem('token');

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try {
            let response = await fetch(`http://localhost:8080/getOrders/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            response = await response.json();
            console.log(response);
            setOrders(response);
        } catch (error) {
            console.log(error);
        }
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        const formattedDate = date.toLocaleString('en-GB', options).replace(',', '');

        return formattedDate;
    };

    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='flex justify-between pr-10 w-full fixed top-0 bg-white border-b z-50'>
                <div className='flex text-2xl items-center pl-3 p-3'>
                    <Link to='/profile'>
                        <FaArrowLeftLong className='w-5 h-5' />
                    </Link>
                    <p className='pl-3'>My Orders</p>
                </div>
            </div>
            <div className='mt-[57px] p-5'>
                {orders.length > 0 ? (
                    <div className='flex flex-wrap'>
                        {orders.map((order) => (
                            <div className='w-full md:w-[500px] bg-white border-2 rounded-lg shadow-md mb-5 mr-5' key={order.orderId}>
                                <div className='p-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-bold'>Delivery</p>
                                        <p className='text-green-700 p-1 bg-lime-100 text-xs font-bold rounded border-2'>DELIVERED</p>
                                    </div>
                                    <p className='text-xs pt-1 pb-1'>Order #{order.orderId}</p>
                                    <p className='text-xs pt-1 pb-1'>{formatDate(order.orderDate)}</p>
                                </div>
                                <hr />
                                <div className='p-3'>
                                    {order.orderItems.map((item) => (
                                        <div className='flex justify-between items-center mb-2' key={item.pizzaId}>
                                            <p className='text-sm'>{item.pizzaName}</p>
                                            <p>{item.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                                <hr />
                                <div className='p-3'>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold'>Total: ${order.totalPrice}</p>
                                        <button className='bg-rose-600 text-white font-semibold px-3 py-1 rounded-md'>Reorder</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex items-center justify-center flex-col'>
                        <img className='w-[30%] mt-20' src="src/assets/pizza.webp" alt="No orders" />
                        <p className='font-bold mb-8 mt-5 text-center'>Seems like you have not ordered from PizzaPalace recently.</p>
                        <p className='text-center'>Place your order now.</p>
                        <Link to="/menu">
                            <button className='uppercase mt-4 p-2 rounded bg-orange-400 text-white'>Explore Menu</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
