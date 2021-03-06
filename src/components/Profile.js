import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

const Profile = () => {
    return (
        <ProfileContainer>
            <UserProfile>
                <UserAvatar src="https://firebasestorage.googleapis.com/v0/b/linkedin-webapp-clone.appspot.com/o/images%2FLee%20Logo.png?alt=media&token=1927abc3-7155-4a13-9bb5-fb4c245c2e14" />
                <UserDetails>
                    <h3> User Name </h3>
                    <p> User Full Name </p>
                </UserDetails>

                <button> Sign Out </button>
            </UserProfile>

            <UserSuggestions>
                <p>Suggestions For You</p>
                <SingleSuggestion>
                    <SuggestedAvatar src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <SuggestedDetails>
                        <h3> User Name </h3>
                        <p> Suggested For You </p>
                    </SuggestedDetails>

                    <button> Follow </button>
                </SingleSuggestion>

                <SingleSuggestion>
                    <SuggestedAvatar src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <SuggestedDetails>
                        <h3> User Name </h3>
                        <p> Follows You </p>
                    </SuggestedDetails>

                    <button> Follow </button>
                </SingleSuggestion>

                <SingleSuggestion>
                    <SuggestedAvatar src="https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <SuggestedDetails>
                        <h3> User Name </h3>
                        <p> Follows You </p>
                    </SuggestedDetails>

                    <button> Follow </button>
                </SingleSuggestion>

                <SingleSuggestion>
                    <SuggestedAvatar src="https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <SuggestedDetails>
                        <h3> User Name </h3>
                        <p> Follows You </p>
                    </SuggestedDetails>

                    <button> Follow </button>
                </SingleSuggestion>

                <SingleSuggestion>
                    <SuggestedAvatar src="https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <SuggestedDetails>
                        <h3> User Name </h3>
                        <p> Suggested For You </p>
                    </SuggestedDetails>

                    <button> Follow </button>
                </SingleSuggestion>

            </UserSuggestions>

            <Tabs>
                <p>About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top Accounts . Hashtags . Language</p>
                <p> &copy; 2021 INSTAGRAM FROM <span>THELEEEFFECT</span> </p>
            </Tabs>
            
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div`
    padding: 20px 5px 20px 20px;
    /* border: 1px solid #ccc; */
    position: sticky;
    left:0;
    right:0;
    top: 90px;
`

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;

    > button {
        border: none;
        outline: none;
        background-color: none;
        color: red;
        font-size: 12px;
        text-align: right;
    }
`

const UserAvatar = styled(Avatar)`
    background-color: white;
    height: 60px !important;
    width: 60px !important;
    cursor: pointer;
`

const UserDetails = styled.div`
    flex: 1;
    margin: 0 10px;

    > h3 {
        font-size: 13px;
        color: #555;
        cursor: pointer;
    }

    > h3:hover {
        text-decoration: underline ;
    }

    > p {
        font-size: 11px;
        color: grey;
    }
`

const UserSuggestions = styled.div`
    padding: 10px;

    > p {
        padding-bottom: 10px;
        font-size: 15px;
        font-weight: 600;
        color: grey;
    }

`

const SingleSuggestion = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;

    > button {
        border: none;
        outline: none;
        background-color: none;
        color: red;
        font-size: 12px;
        text-align: right;
    }
`

const SuggestedAvatar = styled(Avatar)`
    height: 35px !important;
    width: 35px !important;
    cursor: pointer;
`

const SuggestedDetails = styled.div`
    flex: 1;
    margin: 0 10px;
   
    > h3 {
        font-size: 13px;
        color: #555;
        cursor: pointer;
    }

    > h3:hover {
        text-decoration: underline ;
    }

    > p {
        font-size: 11px;
        color: grey;
    }

`

const Tabs = styled.div`
    font-size: 11px;
    color: #bbb;
    text-align: justify;

    > p:last-of-type {
        margin-top: 20px
    }

    > p:last-of-type > span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        letter-spacing: 2px;
        color: #777;
        padding: 0 10px;
    }
`
