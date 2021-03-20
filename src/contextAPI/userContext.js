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

    const [progress, setProgress] = useState(null)

    const signUpAction = (email, password, userName, pictureUrl) => {
        if(email && userName && password){
            appAuth.createUserWithEmailAndPassword(email, password)
            .then( async (userInCreation) => {
                userInCreation.user.updateProfile({
                    displayName: userName,
                    photoURL: await pictureUrl,
                })
            })
            .catch(error => alert(error))
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
        appAuth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        // return unsubscribe
    }, [])


    return (
        <userAuthContext.Provider value={{currentUser, signUpAction, logInAction, resetPasswordAction, signOutAction, progress, setProgress}}>
            {!loading && children}
        </userAuthContext.Provider>
    )
}

export { UserAuthContextProvider, useUserAuth }