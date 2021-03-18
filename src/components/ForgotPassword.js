import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useUserAuth } from '.././contextAPI/userContext'

import { LoginContainer, LoginHeader, LoginForm, LoginBottom } from './formStyles'

const ForgotPassword = () => {

    const { resetPasswordAction } = useUserAuth()
   
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [success, setSuccess] = useState({
        color: 'green',
        backgroundColor: 'lightgreen'
    })

    const handleResetPassword = async (e) => {
        e.preventDefault()

        if(!email){
            setSuccess({})
            setErrorText('You have to specify your registered email address')
            return;
        }

        try {
            setErrorText("")
            setLoading(true)
            await resetPasswordAction(email)
            setSuccess({...success})
            setErrorText('Please check your inbox for further directions')
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

            {errorText && <p style={{color: `${success.color}`, backgroundColor: `${success.backgroundColor}`}}>{errorText}</p>}

            <LoginForm  onSubmit={handleResetPassword}>
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
                <button type="submit" disabled={loading}> Reset Password </button>
            </LoginForm>

            <LoginBottom>
                <p>Already signed up? <Link to='/login'> Click here to sign in</Link>  </p>
                <p> Need a new account? <Link to='/signup'> Click here to sign up</Link>  </p>
                <p> <i> Copyright &copy; 2021 <strong> TheLeeEffect </strong></i>  </p>
            </LoginBottom>  
        </LoginContainer>
    )
}

export default ForgotPassword