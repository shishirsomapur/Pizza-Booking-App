import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { Link } from 'react-router-dom';
import { emptyPizza } from '../slices/pizzaSlice';

const Payment = () => {

    const dispatch = useDispatch()
    const [totalItems, setTotalItems] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const pizzas = useSelector((state) => state.pizza.pizzas);
    const userId = useSelector((state) => state.user.userId);
    const address = useSelector((state) => state.user.address);
    const homeNumber = useSelector((state) => state.user.homeNumber);
    const [selectedPayment, setSelectedPayment] = useState({ method: '', icon: null });

    const token = localStorage.getItem('token')

    const pizzaDetails = pizzas.reduce((acc, pizza) => {
        acc.push({ pizzaId: pizza.pid, quantity: pizza.quantity });
        return acc;
    }, []);

    const handlePaymentSelection = (method, icon) => {
        setSelectedPayment({ method, icon });
    };

    useEffect(() => {
        calculateTotal()
    }, [pizzas])

    const calculateTotal = () => {
        let totalPrice = pizzas.reduce((acc, item) => acc + item.currentPrice, 0)
        let TotalItems = pizzas.reduce((acc, item) => acc + item.quantity, 0)
        setTotalPrice(totalPrice)
        setTotalItems(TotalItems)
    }

    const addOrder = async () => {
        const orderDate = new Date().toISOString()

        const orderData = {
            userId: parseInt(userId),
            orderDate: orderDate,
            totalPrice: totalPrice,
            pizzaDetails: pizzaDetails
        }

        try {
            const response = await fetch('http://localhost:8080/addOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderData)
            })

            if (response.ok) {
                const data = await response.json()
                console.log("Order added Sucessfully", data)
                dispatch(emptyPizza)

            } else {
                console.error("Error adding order", response.statusText)
            }
        } catch (error) {
            console.error('Error adding order: ', error)
        }
    }

    return (
        <div className='absolute bg-zinc-200 w-full'>
            <div className=' border border-b-2 fixed w-full bg-white'>
                <p className='p-[10px] pl-10 font-semibold text-lg'>Payment Options</p>
            </div>
            <div className='absolute w-[100%] h-full flex md:flex-row flex-col'>
                <div className=' mt-[53px] md:w-[75%] w-full flex flex-col items-center justify-between p-3 md:p-0 '>
                    <div className='w-full pl-5 flex justify-between p-5 md:ml-[10px] mb-1 bg-white' onClick={() => handlePaymentSelection('Pay by any UPI App', 'src/assets/upi.png')}>
                        <div className='flex items-center w-full'>
                            <img className='w-[40px]' src="src/assets/upi.png" alt="UPI Icon" />
                            <p>Pay by any UPI App</p>
                        </div>
                        <input type="radio" name="payment" id="upi" />
                    </div>
                    <div className='w-full pl-5 flex justify-between p-5 md:ml-[10px] bg-white' onClick={() => handlePaymentSelection('Cash on Delivery', <HiOutlineCurrencyRupee className='w-5 h-5 m-2 mr-3' />)} >
                        <div className='flex items-center w-full'>
                            <HiOutlineCurrencyRupee className='w-5 h-5 m-2 mr-3' />
                            <p>Cash on Delivery</p>
                        </div>
                        <input type="radio" name="payment" id="cod" />
                    </div>
                </div>
                <div className='ml-3 md:mt-[53px] right-0 md:w-[23%] mr-3 md:mr-0'>
                    <div>
                        <div className='bg-white p-2 mb-3 '>
                            <div className='flex items-center'>
                                <MdLocationOn className='mr-1 text-red-600 text-sm' />
                                <p>Deliver to</p>
                            </div>
                            <p className='pl-5 text-slate-500 text-base'>{homeNumber}, {address}</p>
                            <hr />
                            <div className='flex items-center mt-2 text-sm'>
                                <GoClock className='mr-2' />
                                <p>Delivery Now</p>
                            </div>
                        </div>
                        <div className='bg-white p-2 mb-3'>
                            <p className='font-semibold'>Price Details</p>
                            <div className='pt-2 pb-2 text-xs flex items-center justify-between'>
                                <p>Sub Total ({totalItems} item)</p>
                                <p>&#8377;{totalPrice}</p>
                            </div>
                            <div className='pt-2 pb-2 mt-1 text-xs font-bold flex items-center justify-between'>
                                <p>Grand Total</p>
                                <p>&#8377;{totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 w-full bg-white p-3 flex justify-between items-center'>
                <div>
                    {selectedPayment.method ? (
                        <div className='flex items-center'>
                            {selectedPayment.icon == 'src/assets/upi.png' ?
                                <img className='w-[40px]' src="src/assets/upi.png" alt="UPI Icon" /> : selectedPayment.icon
                            }
                            <p className=''>{selectedPayment.method}</p>
                        </div>
                    ) : (
                        <div>
                            <p className='text-xs'>Select payment method </p>
                            <p className='text-xs'>to proceed further</p>
                        </div>
                    )}
                </div>
                <Link to="/trackOrder">
                    <button className={`${selectedPayment.method ? 'bg-red-500' : 'bg-stone-500'} text-white py-2 px-4 rounded`} onClick={() => addOrder()}>
                        Place Order &#8377;{totalPrice}
                    </button>
                </Link>
            </div>
            {/* <div className='absolute w-full h-screen inset-0 bg-black bg-opacity-25 z-20 backdrop-blur-sm'>
                <div className='w-full h-screen flex items-center justify-center'>
                    <div className='bg-white p-16 flex flex-col items-center'>
                        <p>Amount is paid and Order has been placed successfully.</p>
                        <Link className='bg-orange-500 p-2 mt-5 rounded-lg text-white' to='/trackOrder'>
                            <button>Track Order</button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Payment
