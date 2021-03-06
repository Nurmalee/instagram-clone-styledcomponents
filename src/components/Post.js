import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { BsHeart } from 'react-icons/bs';
import { GoComment, GoTag } from 'react-icons/go';
import { RiSendPlaneLine } from 'react-icons/ri';




const Post = () => {
    return (
        <PostContainer>
            <PostHeader>
                <PostAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lIsxlQmxODlpTRxUy2fJmi14FwcsJbhbCg&usqp=CAU" />
                <PostHeaderTitle>
                    <h3>Brianaamoore</h3>
                    <p>Zamunda, Angola</p>
                </PostHeaderTitle>
            </PostHeader>

            <PostBody>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXLgqf6Q4-CyL5YIZ2xuECaGZjwdu_nrZDA&usqp=CAU" alt="imagefile"/>
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
    border: 1px solid;
    margin: 20px auto;
    max-width: 900px;
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
    > h3, p {
        font-size: 14px;
    }

    > p {
        font-size: 12px;
    }
`

const PostBody = styled.div`
    border: 1px solid;
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
    margin-right: 7px;
`

const TagIcon = styled(GoTag)`
    height: 23px;
    width: 23px;
`

const CommentIcon = styled(GoComment)`
    height: 23px;
    width: 23px;
    margin-right: 5px;
`

const PaperPlaneIcon = styled(RiSendPlaneLine)`
    height: 23px;
    width: 23px;
`

const PostBottomLeft = styled.div`
    
   
`

const PostBottomRight = styled.div`
    
  
`


