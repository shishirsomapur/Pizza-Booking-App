import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between w-full px-6 py-12 mt-10'>
            <div className='md:w-1/2 mb-8 md:mb-0 md:items-start md:justify-start flex flex-col items-center justify-center'>
                <p className='text-lg md:text-xl mb-2 pl-2'>Are you hungry?</p>
                <h1 className='text-6xl'>Don't wait</h1>
                <Link to="/menu">
                    <button className='bg-orange-500 text-white rounded-full h-10 w-32 mt-4'>Order Now!</button>
                </Link>
            </div>
            <div className='md:w-1/2 flex justify-end'>
                <img className="w-full max-w-md mx-auto md:mx-0" src="src/assets/pizza-home-image.png" alt="Pizza" />
            </div>
        </div>
    );
}

export default Home;
