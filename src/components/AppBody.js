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
                <Post />  
            </MainBody>

            <UserProfile>
                <Profile />
            </UserProfile>
               
        </AppBodyContainer>
    )
}

export default AppBody

const AppBodyContainer = styled.section`
    /* border: 2px solid; */
    display: flex;
    margin: 0 auto;
    margin-top: 56px;
    max-width: 930px;

    @media (max-width: 900px) {
        max-width: 600px;
    }
`

const MainBody = styled.div`
    flex: 0.65;

    @media (max-width: 900px) {
        flex: 1;
    }
`

const UserProfile = styled.div`
    flex: 0.35;
    border: 1px solid #ccc;
    /* height: 100vh; */
    position: relative;

    @media (max-width: 900px) {
        display: none;
    }
`


