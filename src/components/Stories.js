import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
// import { storiesData } from '.././data/appUiData'
import { useUserAuth } from '.././contextAPI/userContext'

const url = 'https://randomuser.me/api/?results=6'

const Stories = () => {
    const { currentUser } = useUserAuth()

    const [stories, setStories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        try {
            const getRandomUsers = async () => {
                const resp = await fetch(url)
                const users = await resp.json()
                setStories(users.results)
            }
            getRandomUsers()
            setIsLoading(false)
        } catch (error) {
            console.log(error.message);
        }
    }, [])

    return (
        <StoriesContainer>
           
            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src={currentUser.photoURL}> {currentUser.displayName[0].toUpperCase()} </StoriesAvatar>
                </AvatarBg>
                {currentUser.displayName.length <= 10 ? <p> {currentUser.displayName} </p> : <p> {currentUser.displayName.slice(0,10)}... </p>}
            </StoryContainer>

            {
               !isLoading &&
                stories.map((story, i) => {
                    const {name:{first, last}, picture:{large}} = story
                    const fullName = first + " " + last
                    return (
                        <StoryContainer key={i}>
                            <AvatarBg>
                                <StoriesAvatar src={large} />
                            </AvatarBg>
                            {fullName.length <= 10 ? <p> {fullName} </p> : <p> {fullName.slice(0,10)}... </p>}
                        </StoryContainer>
                    )
                })
            }
        </StoriesContainer>
    )
}

export default Stories

const StoriesContainer = styled.section`
    border: 1px solid #ccc;
    padding: 20px 10px;
    background-color: white;
    margin: 2px auto 0 auto;
    display: flex;
    justify-content: space-around;
    overflow-x: scroll;

    @media (min-width: 650px) {
        margin-top: 40px;
    }

    /* scrollbar */
    ::-webkit-scrollbar {
        height: 3px;
    }

    :hover::-webkit-scrollbar-track {
        background: #ccc;
    }
  
    :hover::-webkit-scrollbar-thumb {
        border-radius: 30px;
    }
  
    :hover::-webkit-scrollbar-thumb {
        background: #aaa;
    }
`

const StoryContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        font-size: 11px;
        margin-top: 3px;
    }
`

const AvatarBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, red, purple);
    border-radius: 50%;
    min-height: 64px;
    min-width: 64px;
`

const StoriesAvatar = styled(Avatar)`
    cursor: pointer;
    height: 60px !important;
    width: 60px !important;
    background-color: white;
    border: 2px solid white;
`

