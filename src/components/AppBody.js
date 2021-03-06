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
    border: 2px solid;
    display: flex;
    margin: 0 auto;
    max-width: 900px;


`

const MainBody = styled.div`

flex: 0.7
border: 1px solid;
 

`

const UserProfile = styled.div`

flex: 0.3;
border: 1px solid;
background-color: green;
   

`


