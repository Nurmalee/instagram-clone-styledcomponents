import { createContext, useContext, useState , useEffect } from 'react'
import { appAuth } from '../config/firebaseConfig'

const userAuthContext = createContext()

//customHook for using userAuthContext and its values in all compnents
const useUserAuth = () => {
    useContext(userAuthContext)
}

const UserAuthContextProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState('')


    return (
        <userAuthContext.Provider value={{}}>
            {children}
        </userAuthContext.Provider>
    )
}

export { UserAuthContextProvider, useUserAuth }