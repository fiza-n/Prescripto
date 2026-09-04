import {useState} from 'react'
import { useParams } from 'react-router-dom'
import {useAppContext} from '../context/AppContext'
const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const {doctors} = useAppContext()

  const applyFilter = () =>{
    if(speciality) {
       setFilterDoc(doctors.filter((doctor) => doctor.speciality === speciality))
    }
    setFilterDoc(doctors)
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p>Browse through Doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologis</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
         {doctors.map((doctor, index) => (
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
      </div>
    </div>
  )
}

export default Doctors