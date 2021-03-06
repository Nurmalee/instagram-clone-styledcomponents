import React from 'react'
import Post from './Post'
import Stories from './Stories';
import styled from 'styled-components'
import Profile from './Profile';

const AppBody = () => {
    return (
        <AppBodyContainer>
            <MainBody>
                <Stories />
                <Post image="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post image="https://images.unsplash.com/photo-1614958662272-642dbdc1be97?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post image="https://images.unsplash.com/photo-1614970800312-cf7417e37086?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

            </MainBody>

            <ProfileContainer>
                <Profile />
            </ProfileContainer>
               
        </AppBodyContainer>
    )
}

export default AppBody

const AppBodyContainer = styled.main`
    /* border: 2px solid #ccc; */
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 930px;

    @media (max-width: 900px) {
        max-width: 600px;
    }
`

const MainBody = styled.section`
    flex: 0.65;

    @media (max-width: 900px) {
        flex: 1;
    }
`

const ProfileContainer = styled.section`
    flex: 0.35;
    border: 1px solid #ccc;
    position: relative;

    @media (max-width: 900px) {
        display: none;
    }
`


