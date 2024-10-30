import React from 'react'
import { useSelector } from 'react-redux'
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { LiaPowerOffSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { FaArrowLeftLong } from "react-icons/fa6";

const Profile = () => {

    const username = useSelector((state) => state.user.username)
    const firstLetter = username.charAt(0)

    return (
        <div>
            <div className='flex justify-between pr-10 w-[100%] fixed top-0 bg-white '>
                <div className='flex text-2xl items-center pl-3 p-3'>
                    <Link to='/menu'>
                        <FaArrowLeftLong className='w-5 h-5' />
                    </Link>
                    <p className='pl-3'>My Profile</p>
                </div>
            </div>
            <div className='absolute mt-16  w-full flex items-center justify-center'>
                <div className='mt-16 w-[70%] md:w-[40%] h-[30%] bg-white'>
                    <div className='p-3 flex items-center'>
                        <div className='w-[30px] h-[30px] mr-3 rounded-full bg-orange-500 flex items-center justify-center text-white text-[20px]'>
                            {firstLetter}
                        </div>
                        {username}
                    </div>
                    <Link to='/trackOrder'>
                        <div className='flex items-center p-2'>
                            <SlBasket />
                            <div className='p-2'>Track Order</div>
                        </div>
                    </Link>
                    <Link to='/orders'>
                        <div className='flex items-center p-2'>
                            <PiShoppingBagOpenLight />
                            <div className='p-2'>My Orders</div>
                        </div>
                    </Link>
                    <div className='flex items-center p-2'>
                        <LiaPowerOffSolid />
                        <div className='p-2'>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
