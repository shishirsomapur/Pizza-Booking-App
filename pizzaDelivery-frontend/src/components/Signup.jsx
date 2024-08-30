import React, { useEffect, useRef, useState } from 'react'
import { BsCheck2Circle } from "react-icons/bs";

const Signup = ({ onClose }) => {

  const modalRef = useRef(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [registered, setRegistered] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const closeModal = (event) => {
    if (modalRef.current == event.target) {
      setRegistered(false)
      onClose()
    }
  }

  useEffect(() => {
    if (isSubmitted && username === "")
      setIsUsernameError(true)
    else
      setIsUsernameError(false)

    if (isSubmitted && password === "")
      setIsPasswordError(true)
    else
      setIsPasswordError(false)
  }, [username, password, isSubmitted])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    if (username === "" || password === "")
      return

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

      if (response.username == newUser.username) {
        setRegistered(true)
      }
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center z-50 items-center' ref={modalRef} onClick={closeModal}>
      <div className='w-[500px] flex flex-col'>
        <div className='bg-white p-2 rounded '>
          {registered ?
            <div className='flex items-center justify-center flex-col'>
              <BsCheck2Circle className='w-24 h-24' />
              <p>Registered User Successfully</p>
            </div>
            :
            <form className='flex flex-col z-40' onSubmit={handleSubmit} >
              <label htmlFor='username' className=' '>Username: </label>
              <input className='bg-slate-200 my-2 h-7 p-2' type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              {isUsernameError && <p className='text-red-500 text-xs font-bold mb-2'>*Username is required</p>}
              <label htmlFor="password">Password: </label>
              <input className='bg-slate-200 my-2 h-7 p-2' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {isPasswordError && <p className='text-red-500 text-xs font-bold mb-2'>*Password is required</p>}
              <input className="w-28 bg-slate-200 rounded my-3 cursor-pointer" type="submit" value="submit" />
            </form>
          }
        </div>
      </div>

    </div>
  )
}

export default Signup