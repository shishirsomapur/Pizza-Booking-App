import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between pr-2 '>
      <div className='flex text-2xl items-center pl-6'>
        <img src="src\assets\pizza-logo.png" width="100px" height="100px" alt="" />
        <p>PizzaPalace</p>
      </div> 
      <ul className='flex w-1/4 justify-between items-center'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
      <div className='w-1/12 flex justify-between'>
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
