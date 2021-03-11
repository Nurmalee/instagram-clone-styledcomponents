import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserAuth } from '.././contextAPI/userContext'


const PrivateRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useUserAuth()
    return (
        <Route
            {...rest}
            render = {props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
            
        />
    )
}

export default PrivateRoute