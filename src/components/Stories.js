import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';

const Stories = () => {
    return (
        <StoriesContainer>

            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://firebasestorage.googleapis.com/v0/b/linkedin-webapp-clone.appspot.com/o/images%2FLee%20Logo.png?alt=media&token=1927abc3-7155-4a13-9bb5-fb4c245c2e14" />
                </AvatarBg>
                <p>The Lee</p>
            </StoryContainer>
          
            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nWUWzq7si2Z0V91ziLuth57egprQSbQcXw&usqp=CAU" />
                </AvatarBg>
                <p>Rihanna</p>
            </StoryContainer>

            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWtt8VduiqgHuvY9tY2pQpPguYLrQRClbnA&usqp=CAU" />
                </AvatarBg>
                <p>Cristiano</p>
            </StoryContainer>
           
            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopMx7dcoqspKyWtme4twKvHViAQg9YBkj-g&usqp=CAU" />
                </AvatarBg>
                <p>Nicki Minaj</p>
            </StoryContainer>

            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lIsxlQmxODlpTRxUy2fJmi14FwcsJbhbCg&usqp=CAU" />
                </AvatarBg>
                <p>Brianaamoore</p>
            </StoryContainer>

           
            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wxzgd28yMN8y6RQXm4axmp4QIiuTpr2O9A&usqp=CAU" />
                </AvatarBg>
                <p>Marques Brownlee</p>
            </StoryContainer>
           
            <StoryContainer>
                <AvatarBg>
                    <StoriesAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYqVOz_VI8N7z0EIoCE--obgFS9rhee3rjw&usqp=CAU" />
                </AvatarBg>
                <p>Israel Adesanya</p>
            </StoryContainer>
            
        </StoriesContainer>
    )
}

export default Stories

const StoriesContainer = styled.section`
    border: 1px solid #ccc;
    padding: 20px 10px;
    background-color: white;
    max-width: 900px;
    margin: 2px auto;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    overflow-x: scroll;

    @media (min-width: 700px) {
        margin-top: 30px;
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
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        text-align: center;
        font-size: 11px;
        margin-top: 3px;
    }
`

const AvatarBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    place-items: center;
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

