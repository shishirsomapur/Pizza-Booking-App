import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import { BiSolidUserCircle } from "react-icons/bi"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const username = useSelector((state) => state.user.username)

  useEffect(() => {
  }, [isSignUpModalOpen])

  return (
    <div className='flex justify-between pr-10 w-[100%] fixed top-0 z-20 bg-white'>
      <div className=''>
        <Link className='flex text-2xl items-center pl-6' to='/'>
          <img src="src\assets\PizzaPalace-logo.png" width="50px" height="50px" alt="" />
          <p>PizzaPalace</p>
        </Link>
      </div>
      <ul className='flex w-2/12 justify-between items-center '>
        <li><Link className='text-lg ' to='/menu'>Menu</Link></li>
        <div className='flex items-center'>
          <BiSolidUserCircle className='w-9 h-9 mr-2' />
          {username == null ? <div className='leading-4'>
            <p className='text-[12px] font-semibold'>MY ACCOUNT</p>
            <button onClick={() => setIsLoginModalOpen(true)}><Link className='text-[10px] mr-1 font-semibold'>Login</Link></button>
            |
            <button onClick={() => setIsSignUpModalOpen(true)}><Link className='text-[10px] ml-1 font-semibold'>Sign up</Link></button>
          </div> :
            <Link to='/profile'>
              <div className='text-[15px] font-semibold'>
                {username}
              </div>
            </Link>}
        </div>
      </ul>
      {isSignUpModalOpen && <Signup onClose={() => setIsSignUpModalOpen(false)} />}
      {isLoginModalOpen && <Login onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  )
}

export default Navbar
