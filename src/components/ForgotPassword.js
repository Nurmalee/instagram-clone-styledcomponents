import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useUserAuth } from '.././contextAPI/userContext'

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

const LoginContainer = styled.div`
    display: grid;
    margin: 70px auto;
    padding: 20px 10px;
    text-align:center;
    max-width: 400px;
    font-size: 14px;
    position: relative;

    > p {
        cursor: pointer;
        padding: 10px;
        margin-bottom: 15px;
        font-weight: 600;
        color: red;
        background-color: rgba(200, 0, 0, 0.2);
    }
`

const LoginHeader = styled.div`
    margin-bottom: 10px;

    > img {
        height: 45px;
        object-fit: contain;
        cursor: pointer;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        padding: 12px 10px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 14px;
        outline: none;
        border: none;
        border-radius: 2px;
        box-shadow: 0 0 3px black;

        :focus {
            outline: 1px solid;
        }
    }

    > button {
        padding: 12px;
        width: 100%;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        outline: none;
        border: 1px solid black;
        border-radius: 2px;
        background-color: #333;
        color: grey;
        transition: 1500ms;

        :hover {
            background-color: black;
            color: white;
        }
    }
`


const LoginBottom = styled.div`
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding: 10px 0;
    
    > p > span {
        cursor: pointer;
        text-decoration: underline;
        color: red;
    }

    > p:nth-of-type(3) {
        font-size: 12px;
        margin-top: 5px;
    }
`