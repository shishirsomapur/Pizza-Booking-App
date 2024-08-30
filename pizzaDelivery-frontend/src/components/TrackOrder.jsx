import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TrackOrder = () => {
    const pizzas = useSelector((state) => state.pizza.pizzas);
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev < 3 ? prev + 1 : prev));
        }, 50000);

        return () => clearInterval(timer);
    }, []);

    const getProgressWidth = () => {
        if (progress === 1) return 'w-1/3';
        if (progress === 2) return 'w-2/3';
        if (progress === 3) return 'w-full';
    };

    const getStatus = () => {
        if (progress === 1) return 'Order Placed';
        if (progress === 2) return 'Order Prepared';
        if (progress === 3) return 'Order Delivered';
    };

    return (
        <div>
            <div className=' border border-b-2 fixed w-full bg-white'>
                <p className='p-[10px] pl-10 font-semibold text-lg'>Track Your Order</p>
            </div>
            {pizzas.length > 0 ? <div className='absolute w-full mt-20'>
                <div className="p-6 max-w-xl mx-auto bg-white">
                    <div className="mb-6 w-2/3 ">
                        <h3 className="text-lg font-semibold mb-3">Pizzas Ordered:</h3>
                        <ul className="list-disc list-inside flex flex-col w-36 justify-between">
                            {pizzas.map((pizza) => (
                                <ul className='flex justify-between' key={pizza.pid}>
                                    <li className="text-gray-700">{pizza.pname}</li>
                                    <li className="text-gray-700">{pizza.quantity}</li>
                                </ul>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                            <div className={`h-full bg-orange-500 transition-all duration-500 ${getProgressWidth()}`}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
                            <span>Order Placed</span>
                            <span>Order Prepared</span>
                            <span>Order Delivered</span>
                        </div>
                        <div className="text-center mt-4 text-lg font-bold text-orange-600">{getStatus()}</div>
                    </div>
                </div>
            </div> :
                <div className='absolute w-full'>
                    <div className='bg-white flex items-center justify-center flex-col p-20 mt-28 m-10 '>
                        <img className='h-52' src="src\assets\trackOrder.png" alt="" />
                        <p className=' text-2xl text-slate-400 font-bold mb-2'>No Orders to Track</p>
                        <p className=' leading-5 text-slate-400 font-semibold'>Please order from the menu.</p>
                        <Link to="/menu">
                            <button className='uppercase mt-4 p-2 rounded bg-orange-400 text-white'>Explore Menu</button>
                        </Link>
                    </div>
                </div>
            }

        </div>
    );
};

export default TrackOrder;


