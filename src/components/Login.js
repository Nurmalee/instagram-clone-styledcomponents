import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <LoginContainer>
            <LoginHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="instagram"/>
            </LoginHeader>

            <LoginForm>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button type="submit"> Log In</button>
            </LoginForm>

            <p>Forgot your password? <span> Get help signing in </span>  </p>
            
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: grid;
    margin: 100px auto;
    padding: 10px;
    text-align:center;
    border: 1px solid;
    max-width: 400px;
    font-size: 14px;

    > p > span {
        cursor: pointer;
        text-decoration: underline;
        color: red;
    }
`

const LoginHeader = styled.div`
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
    }

    > button {
        padding: 12px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 14px;
    }
`
