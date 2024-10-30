import React, { useEffect, useRef, useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbXboxX } from "react-icons/tb";
import { updateUsername, updateUserId } from '../slices/userSlice';
import { setLoginStatus } from '../slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ onClose }) => {
  const modalRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const loginStatus = useSelector((state) => state.login.loginStatus);

  const dispatch = useDispatch();

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      dispatch(setLoginStatus(null));
      onClose();
    }
  };

  useEffect(() => {
    if (isSubmitted && username === "")
      setIsUsernameError(true);
    else 
      setIsUsernameError(false);

    if (isSubmitted && password === "") 
      setIsPasswordError(true);
    else 
      setIsPasswordError(false);
    
  }, [username, password, isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (username === "" || password === "") 
      return
    

    let newUser = {
      username: username,
      password: password,
    };

    try {
      let response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' },
      });

      const tokenAndUserId = await response.text();
      const [actualToken, userId] = tokenAndUserId.split(':');
      localStorage.setItem('token', actualToken);

      if (response.ok) {
        dispatch(updateUsername(username));
        dispatch(updateUserId(userId));
        dispatch(setLoginStatus('success'));
      } else {
        dispatch(setLoginStatus('failure'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center z-50 items-center' ref={modalRef} onClick={closeModal}>
      <div className='w-[300px] md:w-[500px] flex flex-col'>
        <div className='bg-white p-2 rounded'>
          {loginStatus === null && (
            <form className='flex flex-col z-40' onSubmit={handleSubmit}>
              <label htmlFor='username'>Username: </label>
              <input className='bg-slate-200 my-2 h-7 p-2' type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              {isSubmitted && isUsernameError && <p className='text-red-500 text-xs font-bold mb-2'>*Username is required</p>}
              <label htmlFor="password">Password: </label>
              <input className='bg-slate-200 my-2 h-7 p-2' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {isSubmitted && isPasswordError && <p className='text-red-500 text-xs font-bold mb-2'>*Password is required</p>}
              <input className="w-28 bg-slate-200 rounded my-3 cursor-pointer" type="submit" value="Submit" />
            </form>
          )}
          {loginStatus === 'success' && (
            <div className='flex items-center justify-center flex-col'>
              <FaRegCircleCheck className='w-24 h-24 mb-3' />
              <p>Login Successful</p>
            </div>
          )}
          {loginStatus === 'failure' && (
            <div className='flex items-center justify-center flex-col'>
              <TbXboxX className='w-24 h-24 mb-3' />
              <p>Login Failed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
