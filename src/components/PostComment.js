import React from 'react'
import styled from 'styled-components'
import { VscSmiley } from 'react-icons/vsc';



const PostComment = () => {
    return (
        <PostCommentContainer>
            <p>View all xxx comments</p>
            <SingleComment>
                <h3> Commentator_1 <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </span> </h3>
            </SingleComment>

            <SingleComment>
                <h3> Commentator_2 <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. </span> </h3>
            </SingleComment>

            <form>
                <CommentInputSmileyIcon />
                <input type="text" placeholder="Add a comment..."/>
                <button type="submit">Post</button>
            </form>
        </PostCommentContainer>
    )
}

export default PostComment

const PostCommentContainer = styled.div`

    > p {
        padding: 3px 15px;
        font-size: 14px;
        font-weight: 500;
        color: #777;
    }

    > form {
        width: 100%;
        margin-top: 10px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        border-top: 1px solid #ccc;

        @media (max-width: 650px) {
            display: none;
        }
    }

    > form > input {
        width: 100%;
        flex: 1;
        padding: 20px 10px;
        border: none;
        outline: none;
        color: #444;
    }

    > form > button {
        padding: 10px;
        border: none;
        outline: none;
        background-color: white;
        color: red;
    }
`

const SingleComment = styled.div`
    padding: 3px 15px;

    >h3 {
        font-size: 13px;
        font-weight: 500;
    }

    >h3 > span {
        font-size: 11px;
        font-weight: 100;
        color: grey;
    }
`

const CommentInputSmileyIcon = styled(VscSmiley)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`
