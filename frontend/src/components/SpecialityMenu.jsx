import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const SpecialityMenu = () => {

  const {specialityData} = useAppContext()
  return (
    <div id='specialty' className='py-16 px-4 md:px-8 lg:px-20 bg-gray-50'>
      <h1 className='text-xl md:text-4xl lg:text-3xl font-bold text-center text-gray-900 mb-4'>Find By Speciality</h1>
       <p className='text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12'>Simply browse through our extensive list of trusted doctor, schedule your appointments hassle-free.</p>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6'>
        {specialityData.map((item, index) => (
          <Link onClick={()=> scrollTo(0,0)} to={`/doctors/${item.speciality}`} key={index} className='flex flex-col items-center p-4 rounded-lg hover:bg-white  transition-all duration-300 cursor-pointer group'>
            <img src={item.image} alt={item.speciality} className='w-16 h-16 md:w-20 md:h-20 mb-3 group-hover:scale-110 transition-transform duration-300' />
            <p className='text-center text-gray-700 text-sm md:text-base font-medium group-hover:text-blue-600 transition-colors'>{item.speciality}</p>
          </Link>
        ))}
       </div>
    </div>
  )
}

export default SpecialityMenu