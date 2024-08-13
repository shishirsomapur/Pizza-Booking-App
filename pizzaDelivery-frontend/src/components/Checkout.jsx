import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePizzaQuantity } from '../slices/pizzaSlice'
import Address from './Address'

const Checkout = () => {
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const [total, setTotal] = useState(0)
    const [addressModal, setAddressModal] = useState(false)

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
        let total = pizzas.reduce((acc, item) => acc + item.currentPrice, 0)
        setTotal(total)
    }

    return (
        <div className='mt-16'>
            <div className='flex'>
                <div className='w-[60%] pl-8 mt-8'>
                    <table className="min-w-full divide-y divide-gray-200 border">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pizzas.map((item) => (
                                <tr key={item.pid}>
                                    <td className="p-3">
                                        <img className="w-[130px] h-[90px] object-cover" src={item.pimage} alt={item.pname} />
                                    </td>
                                    <td className="p-3">{item.pname}</td>
                                    <td className="p-3">&#8377;{item.price}</td>
                                    <td className="p-3"><div className='flex w-[80px] justify-between'>
                                        <button className='text-2xl border rounded-full border-black  h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleDecrement(item.pid)}>-</button>
                                        {item.quantity}
                                        <button className='text-2xl border rounded-full border-black h-[25px] w-[25px] flex items-center justify-center' onClick={() => handleIncrement(item.pid)}>+</button>
                                    </div></td>
                                    <td className="p-3">&#8377;{item.currentPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className=' mt-8 w-[30%] flex items-center justify-center bg-zinc-200 flex-col fixed right-10 rounded-md'>
                    <div className='font-semibold w-[100%] flex justify-center p-2 '>
                        <h2>PRICE DETAILS</h2>
                    </div>
                    <div className='w-[100%] pt-5 pl-3 pr-3 flex justify-between'>
                        <p>Total Price</p>
                        <p>&#8377; {total}</p>
                    </div>
                    <div className='w-[100%] pt-5 pl-3 pr-3 flex justify-between'>
                        <p>Shipping</p>
                        <p>&#8377; 0</p>
                    </div>
                    <hr className='h-[1.5px] bg-gray-100 w-[95%] m-2 shadow-md' />
                    <div className='w-[100%] flex justify-between pt-5 pl-3 pr-3 pb-3' >
                        <h2 className='font-bold'>Grand Total <p>(including Tax & Charge)</p></h2>
                        <h2 className='font-bold'>&#8377; {total}</h2>
                    </div>
                    <button className='bg-blue-500 w-[95%] m-5 p-3 rounded-md font-bold text-white' onClick={() => setAddressModal(true)}> PLACE ORDER</button>
                </div>
                {addressModal && <Address onClose={() => setAddressModal(false)} />}
            </div>
        </div>
    )
}

export default Checkout

