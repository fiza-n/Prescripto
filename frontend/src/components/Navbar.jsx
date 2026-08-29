import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'


const Navbar = () => {


    const[showMenu, setShowMenu ] = useState(false)
    const [ token, setToken] = useState(true)
    const navigate = useNavigate()
    const {assets} = useAppContext()

    const handleGetStarted = () => {
        navigate('/signin')
    }


  return (

        <nav className="h-17.5 relative w-100% px-6 md:px-16 lg:px-24 xl:px-8 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <NavLink to={"/"} className="text-primary">
        <img src={assets.logo} alt="" />
    </NavLink>

    <ul className="md:flex hidden items-center active gap-10">
        <NavLink to="/"><li className=" outline-none border-none hover:text-gray-500/80 transition" >Home</li></NavLink>
        <NavLink to="/doctors"><li className= " outline-none border-none hover:text-gray-500/80 transition" >All Doctors</li></NavLink>
        <NavLink to="/contact"><li className=" outline-none border-none hover:text-gray-500/80 transition" >Contact</li></NavLink>
        <NavLink to="/about"><li className=" outline-none border-none hover:text-gray-500/80 transition" >About</li></NavLink>
     </ul>

    {token ? (
      <div className="flex items-center gap-4 cursor-pointer group relative">
          <img
            onClick={() => navigate('/my-profile')}
            src={assets.profile_pic}
            alt="profile_pic"
            className="w-10 h-10 rounded-full cursor-pointer"
        />
        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
        <div className="absolute top-0 right-0 text-base font-medium  text-gray-600 z-20 pt-12 hidden group-hover:block">
            <div className="flex flex-col gap-4 min-w-48 bg-stone-100 p-4 rounded">
                <p onClick={()=> navigate("my-profile")}className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=> navigate("my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={()=> setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
            </div>
        </div>
      </div>
    ) : (
        <button onClick={handleGetStarted} type="button" className="bg-primary text-white text-sm hover:bg-primary/90 active:scale-95 transition-all w-40 h-11 rounded-full">
            Get started
        </button>
    )}

  

    <div className="mobile-menu absolute top-17.5 left-0 w-full bg-white p-6 hidden md:hidden">
        <ul className="flex flex-col space-y-4 text-lg">
        <NavLink to="/"><li className=" outline-none border-none hover:text-gray-500/80 transition" >Home</li></NavLink>
        <NavLink to="/doctors"><li className= " outline-none border-none hover:text-gray-500/80 transition" >All Doctors</li></NavLink>
        <NavLink to="/contact"><li className=" outline-none border-none hover:text-gray-500/80 transition" >Contact</li></NavLink>
        <NavLink to="/about"><li className=" outline-none border-none hover:text-gray-500/80 transition" >About</li></NavLink>
        </ul>
        <div className="mt-6">
            {token ? <div>
                <img src={assets.profile_pic} alt="profile_pic" />
            </div>

            : 
            <button onClick={ handleGetStarted} type="button" className="bg-primary text-white mt-6 text-sm hover:bg-primary/90 active:scale-95 transition-all w-40 h-11 rounded-full">
            Get started
            </button> 
             }
        
        </div>
    </div>
</nav>
 
  )
}

export default Navbar