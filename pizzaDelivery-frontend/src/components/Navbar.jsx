import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { BiSolidUserCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const username = useSelector((state) => state.user.username);

  return (
    <div className='flex justify-between items-center px-5 py-2 w-full fixed top-0 z-20 bg-white'>
      <div>
        <Link className='flex items-center text-2xl' to='/'>
          <img src="src/assets/PizzaPalace-logo.png" width="40px" height="40px" alt="PizzaPalace Logo" />
          <p className='ml-2'>PizzaPalace</p>
        </Link>
      </div>
      <ul className='flex items-center space-x-6 md:space-x-4'>
        {/* <li><Link className='text-lg px-2' to='/menu'>Menu</Link></li> */}
        <div className='flex items-center'>
          <BiSolidUserCircle className='w-8 h-8 md:w-6 md:h-6 mr-2' />
          {username == null ? (
            <div className='leading-4'>
              <p className='text-sm font-semibold'>MY ACCOUNT</p>
              <div className='flex items-center text-xs'>
                <button onClick={() => setIsLoginModalOpen(true)}><span className='mr-1 font-semibold'>Login</span></button>
                |
                <button onClick={() => setIsSignUpModalOpen(true)}><span className='ml-1 font-semibold'>Sign up</span></button>
              </div>
            </div>
          ) : (
            <Link to='/profile'>
              <div className='text-sm font-semibold'>
                {username}
              </div>
            </Link>
          )}
        </div>
      </ul>
      {isSignUpModalOpen && <Signup onClose={() => setIsSignUpModalOpen(false)} />}
      {isLoginModalOpen && <Login onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  );
};

export default Navbar;
