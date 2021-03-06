import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { BsHeart } from 'react-icons/bs';
import { GoComment, GoTag } from 'react-icons/go';
import { RiSendPlaneLine } from 'react-icons/ri';


const Post = ({image}) => {
    return (
        <PostContainer>
            <PostHeader>
                <PostAvatar src={image} />
                <PostHeaderTitle>
                    <h3>Brianaamoore</h3>
                    <p>Zamunda, Angola</p>
                </PostHeaderTitle>
            </PostHeader>

            <PostBody>
                <img src={image} alt="imagefile"/>
            </PostBody>

            <PostBottom>
                <PostBottomLeft>
                    <HeartIcon />
                    <CommentIcon />
                    <PaperPlaneIcon />
                </PostBottomLeft>

                <PostBottomRight>
                    <TagIcon />
                </PostBottomRight>
               
            </PostBottom>

            
        </PostContainer>
    )
}

export default Post


const PostContainer = styled.div`
    background-color: white;
    border: 1px solid #ccc;
    margin: 30px auto;
    /* max-width: 900px; */
`

const PostHeader = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`

const PostAvatar = styled(Avatar)`
    margin-right: 10px;

`

const PostHeaderTitle = styled.div`
    > h3 {
        font-size: 14px;
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

const PostBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    > h3, p {
        font-size: 14px;
    }
`

const HeartIcon = styled(BsHeart)`
     height: 23px;
    width: 23px;
    cursor: pointer;
`

const CommentIcon = styled(GoComment)`
    height: 23px;
    width: 23px;
    cursor: pointer;
`

const PaperPlaneIcon = styled(RiSendPlaneLine)`
    height: 23px;
    width: 23px;
    cursor: pointer;
`

const TagIcon = styled(GoTag)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`

const PostBottomLeft = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PostBottomRight = styled.div`
    
  
`


