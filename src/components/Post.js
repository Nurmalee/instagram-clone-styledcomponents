import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { BsHeart } from 'react-icons/bs';
import { GoComment, GoTag } from 'react-icons/go';
import { RiSendPlaneLine } from 'react-icons/ri';


const Post = ({image, name, location}) => {
    return (
        <PostContainer>
            <PostHeader>
                <PostHeaderImage>
                    <PostAvatarBg>
                        <PostAvatar src={image} />
                    </PostAvatarBg>
                </PostHeaderImage>
                {/* <PostAvatar src={image} /> */}
                <PostHeaderTitle>
                    <h3>{name}</h3>
                    {location && <p>{location}</p>}
                </PostHeaderTitle>
            </PostHeader>

            <PostBody>
                <img src={image} alt="imagefile"/>
            </PostBody>

            <PostIcons>
                <PostIconsLeft>
                    <HeartIcon />
                    <CommentIcon />
                    <PaperPlaneIcon />
                </PostIconsLeft>

                <PostIconsRight>
                    <TagIcon />
                </PostIconsRight>
            </PostIcons>

            
        </PostContainer>
    )
}

export default Post


const PostContainer = styled.div`
    background-color: white;
    border: 1px solid #ccc;
    margin: 30px auto;
    /* max-width: 900px; */

    @media (max-width: 650px) {
        background-color: transparent;
        border: none;
    }
`

const PostHeader = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`

const PostHeaderImage = styled.div`
    margin-right: 10px;
    text-align: center;
    display: flex;
    align-items: center;
`

const PostAvatarBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 0 3px; */
    place-items: center;
    background: linear-gradient(to right, red, purple);
    height: 44px;
    width: 44px;
    border-radius: 50%;
`

const PostAvatar = styled(Avatar)`
   border: 2px solid white;
   cursor: pointer;
`

const PostHeaderTitle = styled.div`
    > h3 {
        font-size: 14px;
        cursor: pointer;
    }

    > h3:hover {
        text-decoration: underline;
    }

    > p {
        font-size: 12px;
    }
`

const PostBody = styled.div`
    width: 100%;

    > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const PostIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    > h3, p {
        font-size: 14px;
    }
`

const HeartIcon = styled(BsHeart)`
     height: 27px;
    width: 27px;
    cursor: pointer;
`

const CommentIcon = styled(GoComment)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`

const PaperPlaneIcon = styled(RiSendPlaneLine)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`

const TagIcon = styled(GoTag)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`

const PostIconsLeft = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PostIconsRight = styled.div`
    
  
`