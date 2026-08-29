import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useAppContext } from '../context/AppContext'


const Banner = () => {

    const {navigate} = useAppContext()

  return (
    <div className='bg-primary px-6 md:px-14 lg:px-20 rounded-lg'>
        <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='flex-1 py-8 md:py-12 lg:py-16'>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl md:text-3xl font-bold text-white'>Book Appointments </p>
                    <p className='text-2xl md:text-3xl font-bold text-white'>With 100% Trusted Doctors</p>
                    <div>
                        <button onClick={() => navigate("/signup")} className='bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-2 rounded-lg transition-colors duration-300'>Create Account</button>
                    </div>
                </div>
            </div>
            <div className='flex-1 hidden md:block'>
                <img src={assets.appointment_img} alt="appointment" className='w-full h-auto rounded-lg' />
            </div>
        </div>
    </div>
  )
}

export default Banner