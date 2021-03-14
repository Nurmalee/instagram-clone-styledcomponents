import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { useUserAuth } from '.././contextAPI/userContext'

const url = 'https://randomuser.me/api/?results=4'

const Profile = () => {
    const {currentUser, signOutAction} = useUserAuth()
    const [suggestions, setSuggestions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        try {
            const getRandomUsers = async () => {
                const resp = await fetch(url)
                const users = await resp.json()
                setSuggestions(users.results)
            }
            getRandomUsers()
            setIsLoading(false)
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    return (
        <ProfileContainer>
            <UserProfile>
                <UserAvatar src={currentUser.photoURL}> {currentUser.displayName[0].toUpperCase()} </UserAvatar>
                <UserDetails>
                    <h3> {currentUser.displayName} </h3>
                    <p> You are signed in as <strong> {currentUser.displayName.toLowerCase()} </strong> </p>
                </UserDetails>

                <button onClick={() => signOutAction()}> Sign Out </button>
            </UserProfile>

            <UserSuggestions>
                <p>Suggestions For You</p>

                {!isLoading && 
                    suggestions.map((suggestion, i) => {
                        const {name:{first, last}, picture:{large}} = suggestion
                        return (
                            <SingleSuggestion>
                                <SuggestedAvatar src={large} />
                                <SuggestedDetails>
                                    <h3> {first} {last} </h3>
                                    <p> Suggested For You </p>
                                </SuggestedDetails>

                                <button> Follow </button>
                            </SingleSuggestion>
                        )
                    })

                }

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
    margin-top: 40px;
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