import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='flex'>
            <div className='absolute top-16 flex items-center justify-between mt-4 w-[100%]'>
                <div className='pl-6'>
                    <p className='pl-2 mb-2'>Are you hungry?</p>
                    <h1 className='text-6xl'>Don't wait</h1>
                    <Link to="/menu">
                        <button className='bg-orange-500 text-white rounded-full h-10 w-32 mt-4'>Order Now!</button>
                    </Link>
                </div>
                <img src="src\assets\pizza-home-image.png" width="500px" height="500px" alt="" />
            </div>
            <Footer className="" />
        </div>
    )
}

export default Home