import { createContext , useContext} from "react";
import { doctors, specialityData, assets } from '../assets/assets_frontend/assets'
import { useNavigate } from "react-router-dom";

const AppContext = createContext()


export const AppContextProvider = ({children}) => {

    const {navigate} = useNavigate()

    const value = {
        doctors,
        specialityData,
        assets, navigate
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
 }

 export const useAppContext = () => {
    return useContext(AppContext)
 }
