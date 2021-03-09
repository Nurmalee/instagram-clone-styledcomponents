import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { storiesData } from '.././data/appUiData'

const Stories = () => {
    const [stories, setStories] = useState([]);
   

    useEffect(() => {
        const width = window.innerWidth;
        setStories(storiesData)
        if(width <= 650){
            setStories(storiesData.slice(0,5))
        }
    }, [])

    return (
        <StoriesContainer>
            {
                stories.map((story, index) => {
                    const {name, imageSrc} = story;
                    return (
                        <StoryContainer key={index}>
                            <AvatarBg>
                                <StoriesAvatar src={imageSrc} />
                            </AvatarBg>
                            {name.length <= 10 ? <p> {name} </p> : <p> {name.slice(0,10)}... </p>}
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
    margin: 8px auto 0 auto;
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

