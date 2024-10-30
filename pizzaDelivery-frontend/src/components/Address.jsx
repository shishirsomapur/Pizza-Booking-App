import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAddress, updateHomeNumber } from '../slices/userSlice';

const Address = ({ onClose }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [firstName, setfirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const address = useSelector((state) => state.user.address)
    const homeNumber = useSelector((state) => state.user.homeNumber)
    const [localAddress, setLocalAddress] = useState("")
    const [localhomeNumber, setLocalHomeNumber] = useState("")
    const addressModalRef = useRef(null)
    const closeBtn = useRef(null)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFirstNameError, setIsFirstNameError] = useState(false);
    const [isLastNameError, setIsLastNameError] = useState(false);
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
    const [isAddressError, setIsAddressError] = useState(false);
    const [isHomeNumberError, setIsHomeNumberError] = useState(false);

    const closeModal = (event) => {
        if (addressModalRef.current == event.target || closeBtn.current == event.target) {
            onClose()
        }
    }

    useEffect(() => {
        if (isSubmitted && firstName === "")
            setIsFirstNameError(true)
        else
            setIsFirstNameError(false)

        if (isSubmitted && lastName === "")
            setIsLastNameError(true)
        else
            setIsLastNameError(false)

        if (isSubmitted && phoneNumber === "")
            setIsPhoneNumberError(true)
        else
            setIsPhoneNumberError(false)

        if (isSubmitted && localAddress === "")
            setIsAddressError(true)
        else
            setIsAddressError(false)

        if (isSubmitted && localhomeNumber === "")
            setIsHomeNumberError(true)
        else
            setIsHomeNumberError(false)

    }, [firstName, lastName, phoneNumber, localAddress, localhomeNumber, isSubmitted])

    const handleSaveAndContinue = () => {
        setIsSubmitted(true);
    
        // Check local state values instead of Redux state
        if (firstName !== "" && lastName !== "" && phoneNumber !== "" && localAddress !== "" && localhomeNumber !== "") {
            dispatch(updateAddress(localAddress));
            dispatch(updateHomeNumber(localhomeNumber));
            navigate("/payment");
        }
    };
    

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 z-20 backdrop-blur-sm flex items-center justify-center' ref={addressModalRef} onClick={closeModal}>
            <div className='bg-white w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-4 md:mx-auto p-5 md:p-8 rounded-lg shadow-lg'>
                <div className='bg-zinc-200 p-3 font-semibold text-xl flex justify-between items-center'>
                    <p>Add Address</p>
                    <button ref={closeBtn} onClick={closeModal} className='text-xl font-bold'>X</button>
                </div>
                <div className='p-3'>
                    <p className='p-2 text-lg'>Fill the details below</p>
                    <div className='p-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <input className='border rounded-sm p-2 w-full' type="text" placeholder='First Name' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                            {isFirstNameError && <p className='text-red-500 text-xs font-bold mb-2'>*First Name is required</p>}
                        </div>
                        <div>
                            <input className='border rounded-sm p-2 w-full' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {isLastNameError && <p className='text-red-500 text-xs font-bold mb-2'>*Last Name is required</p>}
                        </div>
                    </div>
                    <div className='p-2'>
                        <input className='border rounded-sm p-2 w-full' type="phone" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        {isPhoneNumberError && <p className='text-red-500 text-xs font-bold mb-2'>*Phone Number is required</p>}
                    </div>
                    <div className='p-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <input className='border rounded-sm p-2 w-full' type="text" placeholder='Address' value={localAddress} onChange={(e) => setLocalAddress(e.target.value)} />
                            {isAddressError && <p className='text-red-500 text-xs font-bold mb-2'>*Address is required</p>}
                        </div>
                        <div>
                            <input className='border rounded-sm p-2 w-full' type="number" placeholder='Home No.' value={localhomeNumber} onChange={(e) => setLocalHomeNumber(e.target.value)} />
                            {isHomeNumberError && <p className='text-red-500 text-xs font-bold mb-2'>*Home No. is required</p>}
                        </div>
                    </div>
                </div>
                <div className='bg-[#65AB0B] p-3 mt-5'>
                    <button className='text-white p-2 uppercase font-semibold border w-full border-white rounded-sm' onClick={() => handleSaveAndContinue()} >
                        Save & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Address;
