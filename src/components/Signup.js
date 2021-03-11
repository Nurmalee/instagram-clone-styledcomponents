import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'


const Signup = () => {

    const [user, setUser] = useState({
        email: '',
        userName: '',
        pictureUrl: '',
        password: '',
        confirmPassword: '',
    })

    const handleLogin = (e) => {
        e.preveventDefault()
    }


    return (
        <LoginContainer>
            <LoginHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="instagram"/>
            </LoginHeader>

            <LoginForm onSubmit={handleLogin}>
                <input type="email" placeholder="Email Address" value={user.email} onChange={e => setUser(e.target.value)} />
                <input type="text" placeholder="User Display Name" value={user.userName} onChange={e => setUser(e.target.value)} />
                <input type="text" placeholder="Picture Url" value={user.pictureUrl} onChange={e => setUser(e.target.value)} />
                <input type="password" placeholder="Password" value={user.password} onChange={e => setUser(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={user.confirmPassword} onChange={e => setUser(e.target.value)} />
                <button type="submit"> Sign Up </button>
            </LoginForm>

            <LoginBottom>
                <p>Already signed up? <Link to='/login' > Click here to sign in</Link>  </p>
            </LoginBottom>
        </LoginContainer>
    )
}

export default Signup

const LoginContainer = styled.div`
    display: grid;
    margin: 100px auto;
    padding: 20px 10px;
    text-align:center;
    border: 1px solid;
    border-radius: 2px;
    max-width: 400px;
    font-size: 14px;

    > p > span {
        cursor: pointer;
        text-decoration: underline;
        color: red;
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

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;

    > input {
        padding: 12px 10px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 14px;
        outline: none;
        border: none;

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
        background-color: white;
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
`