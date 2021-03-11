import { createContext, useContext, useState, useEffect } from 'react'
import { appAuth } from '.././config/firebaseConfig'


const userAuthContext = createContext()

const useAuth = () => {
    return useContext(userAuthContext)
}

const UserAuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('')


    return (
        <userAuthContext.Provider value={0}>
            {children}
        </userAuthContext.Provider>
    )
}

export { UserAuthProvider, useAuth}