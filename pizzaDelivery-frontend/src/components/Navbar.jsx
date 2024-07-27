import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
  }, [isModalOpen])
  

  return (
    <div className='flex justify-between pr-2'>
      <div className='flex text-2xl items-center pl-6'>
        <img src="src\assets\pizza-logo.png" width="100px" height="100px" alt="" />
        <Link to='/'><p>PizzaPalace</p></Link>
      </div> 
      <ul className='flex w-1/4 justify-between items-center'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
      <div className='w-1/12 flex justify-between'>
        <button onClick={() => setIsModalOpen(true)}><Link>Login</Link></button>
      </div>
      {isModalOpen && <Signup onClose={() => setIsModalOpen(false)}/>}
    </div>
  )
}

export default Navbar
