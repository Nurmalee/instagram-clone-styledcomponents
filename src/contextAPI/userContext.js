import { createContext, useContext, useState , useEffect } from 'react'
import { appAuth } from '../config/firebaseConfig'

const userAuthContext = createContext()

//customHook for using userAuthContext and its values in all compnents
const useUserAuth = () => {
    return useContext(userAuthContext)
}

const UserAuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    const signUpAction = (email, password, userName, pictureUrl) => {
        if(email && userName && password){
            appAuth.createUserWithEmailAndPassword(email, password)
            .then((userInCreation) => {
                userInCreation.user.updateProfile({
                    displayName: userName,
                    photoURL: pictureUrl,
                })
            })
            .catch(error => alert(error))
        } else {
            alert("Please fill in you NAME, PASSWORD AND USERNAME")
        }
    }

    const logInAction = (email, password) => {
        return appAuth.signInWithEmailAndPassword(email, password)
    }

    const resetPasswordAction = (email) => {
        return appAuth.sendPasswordResetEmail(email)
    }

    const signOutAction = () => {
        return appAuth.signOut()
    }

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])


    return (
        <userAuthContext.Provider value={{currentUser, signUpAction, logInAction, resetPasswordAction, signOutAction}}>
            {!loading && children}
        </userAuthContext.Provider>
    )
}

export { UserAuthContextProvider, useUserAuth }