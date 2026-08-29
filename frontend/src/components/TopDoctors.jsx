import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const{doctors} = useAppContext()
  return (
    <div className='py-16 px-4 md:px-8 lg:px-20'>
        <h1 className='text-xl md:text-4xl lg:text-3xl text-center text-gray-900 mb-4'>Top Doctors to Book</h1>
        <p className='text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12'>Simply browse through our extensive list of trusted doctor.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {doctors.slice(0,10).map((doctor, index) => (
                <div onClick={() => navigate(`/appointments/${doctor._id}`)} className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer bg-white'>
                    <img src={doctor.image} alt={doctor.name} className='w-full h-48 object-cover bg-gray-100' />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div><p className='text-green-500 text-xs font-medium'>Available</p>
                        </div>
                        <p className='text-lg font-semibold text-gray-900'>{doctor.name}</p>
                        <p className='text-sm text-gray-600'>{doctor.speciality}</p>
                    </div>
                </div>

            ))}
        </div>
        <div className='flex justify-center mt-12'>
          <button onClick={() => {navigate("/doctors"); scrollTo(0,0)}} className='rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-8 py-3 transition-colors'>more</button>
        </div>
    </div>
  )
}

export default TopDoctors