import React, { useRef, useState } from 'react'

const Signup = ({ onClose }) => {

  const modalRef = useRef(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const closeModal = (event) => {
    if (modalRef.current == event.target) {
      onClose()
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    let newUser = {
      username: username,
      password: password
    }

    try {
      let response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' }
      })
      response = await response.json()
      console.log(response)
    } 
    catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center z-50 items-center' ref={modalRef} onClick={closeModal}>
      <div className='w-[500px] flex flex-col'>
        <div className='bg-white p-2 rounded '>
          <form className='flex flex-col' onSubmit={handleSubmit} >
            <label htmlFor='username' className=' '>Username: </label>
            <input className='bg-slate-200 my-2 h-7 p-2' type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password: </label>
            <input className='bg-slate-200 my-2 h-7 p-2' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className='w-28 bg-slate-200 rounded cursor-pointer my-3' type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup