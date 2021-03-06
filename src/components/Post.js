import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { BsHeart, BsThreeDots } from 'react-icons/bs'
import { GoComment, GoTag } from 'react-icons/go'
import { RiSendPlaneLine } from 'react-icons/ri'
import PostComment from './PostComment'


const Post = ({name, text, userPicture, uploadedImage, createdAt, postId}) => {

    const [ showLess, setShowLess ] = useState(true)
    const [ showButton, setShowButton ] = useState(false)

    useEffect(() => {
        if(text.length > 100){
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [text.length])

    return (
        <PostContainer>
            <PostHeader>
                {/* <PostHeaderImage>
                    <PostAvatarBg>
                        <PostAvatar src={image} />
                    </PostAvatarBg>
                </PostHeaderImage> */}
                <PostAvatar src={userPicture}> {name[0].toUpperCase()} </PostAvatar>
                <PostHeaderTitle>
                    <h3>{name.toLowerCase()}</h3>
                    <p>{new Date(createdAt?.toDate()).toUTCString()} </p>
                </PostHeaderTitle>

                <ThreeDotsMoreInfoIcon />
            </PostHeader>

            {uploadedImage &&
            <PostBody>
                 <img src={uploadedImage} alt="imagefile"/>
            </PostBody>
            }

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

            {text && <p> {name.toLowerCase()} 
            <span> {showLess ?  text.slice(0, 100) : text} </span> 
            {showButton && <button onClick={() => setShowLess(!showLess)}> {showLess ? '... more' : '... less'}</button>}
             </p>}

            <PostComment postId={postId} />
        </PostContainer>
    )
}

export default Post


const PostContainer = styled.div`
    background-color: white;
    border: 1px solid #ccc;
    margin: 30px auto;
    /* max-width: 900px; */

    > p {
        font-size: 13px;
        font-weight: 500;
        padding: 3px 15px;
    }

    > p  > span {
        font-size: 11px;
        font-weight: 100;
        color: grey;
    }

    > p > button {
            color: #444;
            /* background-color: transparent; */
            outline: none;
            border: none;
            font-weight: 700;
            font-size: 12px;
            margin-left: 10px;
        }

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

// const PostHeaderImage = styled.div`
//     margin-right: 10px;
//     text-align: center;
//     display: flex;
//     align-items: center;
// `

// const PostAvatarBg = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     place-items: center;
//     background: linear-gradient(to right, red, purple);
//     height: 44px;
//     width: 44px;
//     border-radius: 50%;
// `

const PostAvatar = styled(Avatar)`
    margin-right: 10px;
    border: 2px solid white;
    cursor: pointer;
`

const PostHeaderTitle = styled.div`
    flex: 1;
    > h3 {
        font-size: 14px;
        cursor: pointer;
    }

    > h3:hover {
        text-decoration: underline;
    }

    > p {
        font-size: 11px;
    }
`

const ThreeDotsMoreInfoIcon = styled(BsThreeDots)`
    height: 20px;
    width: 20px;
    cursor: pointer;
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
    padding: 10px 15px;
    > h3, p {
        font-size: 14px;
    }
`

const HeartIcon = styled(BsHeart)`
    height: 26px;
    width: 26px;
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