import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewCartBtn = () => {

    const dispatch = useDispatch()
    const pizzas = useSelector((state) => state.pizza.pizzas)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        calculateTotal()
    }, [pizzas])

    const calculateTotal = () => {
        let totalItems = pizzas.reduce((acc, item) => acc + item.quantity, 0)
        setTotalItems(totalItems)
    }

    return (
        <div className=''>
            {pizzas.length && <div className='fixed bottom-0 w-full bg-white p-1 md:hidden'>
                <div className=' bg-orange-500 text-white m-2 p-3 flex items-center justify-between rounded-md '>
                    <p className='text-sm'>{totalItems} items</p>
                    <Link to="/checkout">
                        <div className='flex items-center'>
                            <FaShoppingCart className='h-5 w-5 text-white mr-3 ' />
                            <div className='text-[12px] h-4 w-6 flex items-center justify-center absolute top-4 bg-black ml-2 rounded-md border-2 border-white'>
                                <p className='p-1'>{totalItems}</p>
                            </div>
                            <p className='text-sm font-bold'>View Cart</p>
                            <MdOutlineKeyboardArrowRight className='h-6 w-7' />
                        </div>
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}

export default ViewCartBtn
