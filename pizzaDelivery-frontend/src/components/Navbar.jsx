import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { BiSolidUserCircle } from "react-icons/bi"

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
  }, [isModalOpen])


  return (
    <div className='flex justify-between pr-10 w-[100%] fixed top-0 z-20 bg-white'>
      <div className=''>
        <Link className='flex text-2xl items-center pl-6' to='/'>
          <img src="src\assets\pizza-logo.png" width="100px" height="100px" alt="" />
          <p>PizzaPalace</p>
        </Link>
      </div>
      <ul className='flex w-2/12 justify-between items-center '>
        <li><Link className='text-lg ' to='/menu'>Menu</Link></li>
        <div className='flex items-center'>
          <BiSolidUserCircle className='w-9 h-9 mr-2' />
          <div className='leading-4'>
            <p className='text-[12px] font-semibold'>MY ACCOUNT</p>
            <button onClick={() => setIsModalOpen(true)}><Link className='text-[10px] mr-1 font-semibold'>Login</Link></button>
            |
            <button onClick={() => setIsModalOpen(true)}><Link className='text-[10px] ml-1 font-semibold'>Sign up</Link></button>
          </div>
        </div>
      </ul>
      {isModalOpen && <Signup onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default Navbar
