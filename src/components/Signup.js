import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { useUserAuth } from '.././contextAPI/userContext'

import { LoginContainer, LoginHeader, LoginForm, LoginBottom } from './formStyles'

const Signup = () => {

    const { signUpAction } = useUserAuth()
    const history =  useHistory()

    const [user, setUser] = useState({
        email: '',
        userName: '',
        pictureUrl: '',
        password: '',
        confirmPassword: ''
    })

    const [errorText, setErrorText] = useState("")
    const [loading, setLoading] = useState(false)

    const handleUserSignUp = async (e) => {
        e.preventDefault()

        if(!user.email || !user.password || !user.userName){
            setErrorText("You atleast have to provide an Email Address, a Username and a Password.")
            return;
        }

        if(user.password !== user.confirmPassword){
            setErrorText("Passwords must be exact")
            return;
        }

        try {
            setErrorText("")
            setLoading(true)
            await signUpAction(user.email, user.password, user.userName, user.pictureUrl)
            history.push("/login")
        } catch (error) {
            setErrorText(error.message)
        }
        setLoading(false)
    }


    return (
        <LoginContainer>
            <LoginHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="instagram"/>
            </LoginHeader>

            {errorText && <p>{errorText}</p>}

            <LoginForm onSubmit={handleUserSignUp}>
                <input type="email" placeholder="Email Address" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                <input type="text" placeholder="User Display Name" value={user.userName} onChange={e => setUser({...user, userName: e.target.value})} />
                <input type="text" placeholder="Picture Url" value={user.pictureUrl} onChange={e => setUser({...user, pictureUrl: e.target.value})} />
                <input type="password" placeholder="Password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                <input type="password" placeholder="Confirm Password" value={user.confirmPassword} onChange={e => setUser({...user, confirmPassword: e.target.value})} />
                <button type="submit" disabled={loading}> Sign Up </button>
            </LoginForm>

            <LoginBottom>
                <p>Already have an account? <Link to='/login' > Click here to sign in</Link>  </p>
                <p> <i> Copyright &copy; 2021 <strong> TheLeeEffect </strong></i>  </p>
            </LoginBottom>
        </LoginContainer>
    )
}

export default Signup