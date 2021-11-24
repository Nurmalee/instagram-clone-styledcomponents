import React, {useState} from 'react'

import { Link, useHistory } from 'react-router-dom'
import { useUserAuth } from '.././contextAPI/userContext'

import { LoginContainer, LoginHeader, LoginForm, LoginBottom } from './formStyles'

const Login = () => {

    const { logInAction } = useUserAuth()
    const history =  useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorText, setErrorText] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        if(!email || !password){
            setErrorText("Did you sign up already? You have to provide an Email Address and a Password.")
            return;
        }

        try {
            setErrorText("")
            await logInAction(email, password)
            history.push("/")
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

            <LoginForm  onSubmit={handleLogin}>
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" disabled={loading}> Log In</button>
            </LoginForm>

            <LoginBottom>
                <p> Forgot your password? <Link to="/resetpassword"> Get help signing in </Link>  </p>
                <p> Need a new account? <Link to="/signup"> Click here to sign up</Link>  </p>
                <p> <i> Copyright &copy; 2021 <strong> TheLeeEffect </strong></i>  </p>
            </LoginBottom>     
        </LoginContainer>
    )
}

export default Login
