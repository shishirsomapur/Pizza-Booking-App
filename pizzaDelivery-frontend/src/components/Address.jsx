import React, { useRef } from 'react';

const Address = ({ onClose }) => {
    const addressModalRef = useRef(null)
    const closeBtn = useRef(null)

    const closeModal = (event) => {
        if (addressModalRef.current == event.target || closeBtn.current == event.target) {
            onClose()
        }
    }

    return (
        <div className='absolute inset-0 bg-black bg-opacity-25 z-20 backdrop-blur-sm' ref={addressModalRef} onClick={closeModal}>
            <div className='bg-white flex flex-col fixed right-10 top-32'>
                <div className='bg-zinc-200 p-3 font-semibold text-xl flex justify-between'>
                    <p>Add Address</p>
                    <button ref={closeBtn} onClick={closeModal}>X</button>
                </div>
                <div className='p-3'>
                    <div>
                        <p className='p-2'>
                            Fill the details below
                        </p>
                        <div className='p-2 flex justify-between'>
                            <input className='border rounded-sm p-2' type="text" placeholder='First Name' />
                            <input className='border rounded-sm p-2' type="text" placeholder='Last Name' />
                        </div>
                        <div className='p-2'>
                            <input className='border rounded-sm p-2 w-[100%]' type="text" placeholder='Email Address' />
                        </div>
                        <div className='p-2'>
                            <input className='border rounded-sm mr-5 p-2' type="text" placeholder='Address' />
                            <input className='border rounded-sm p-2' type="text" placeholder='Home No.' />
                        </div>
                    </div>
                </div>
                <div className='bg-[#65AB0B] p-3 mt-5'>
                    <button className='text-white p-2 uppercase font-semibold border w-[100%] border-white rounded-sm'>Save & Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Address;

{/* <div className='bg-white flex flex-col'>
                <div className='bg-zinc-200 p-3 font-semibold text-xl '>
                    Add Address
                </div>
                <div className='p-3 w-[85%]'>
                    <div>
                        <p className='p-2'>
                            Fill the details below
                        </p>
                        <div className='p-2'>
                            <input className='border rounded-sm mr-3 p-2' type="text" placeholder='First Name' />
                            <input className='border rounded-sm p-2' type="text" placeholder='Last Name' />
                        </div>
                        <div className='p-2'>
                            <input className='border rounded-sm p-2 w-[100%]' type="text" placeholder='Email Address' />
                        </div>
                        <div className='p-2'>
                            <input className='border rounded-sm mr-5 p-2' type="text" placeholder='Address' />
                            <input className='border rounded-sm p-2' type="text" placeholder='Home No.' />
                        </div>
                    </div>
                </div>
                <div className='bg-[#65AB0B] p-3 mt-5'>
                    <button className='text-white p-2 uppercase font-semibold border w-[100%] border-white rounded-sm'>Save & Continue</button>
                </div>
            </div> */}