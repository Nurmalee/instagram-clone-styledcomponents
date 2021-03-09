import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VscSmiley } from 'react-icons/vsc';
import { instagramCloneDb, firebaseServerTime } from '.././config/firebaseConfig'

const PostComment = ({postId}) => {
    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])
    // const [shownComments, setShownComments] = useState([])

    useEffect(() => {
        instagramCloneDb.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("createdAt", "desc")
        .onSnapshot(snap => {
            setComments(snap.docs
                .map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [postId])

    // useEffect(() => {
    //     if(comments.length > 5){
    //         let slicedComments = comments.slice(0, 5);
    //         setComments(slicedComments)
    //     }
    // }, [comments.length, comments])

    const handleCommentInput = (e) => {
        e.preventDefault()

        if(postId && commentText){
            instagramCloneDb.collection("posts")
            .doc(postId)
            .collection("comments")
            .add({
                commentator: "The Lee Best",
                text: commentText,
                createdAt: firebaseServerTime
            })
            setCommentText("")
        }

    }


    return (
        <PostCommentContainer>
            {comments.length > 5 && <p>View all {comments.length} comments </p> }

            {
                comments.length > 5 ?
                comments.slice(0, 5).map(comment => {
                    const {commentator, text} = comment.data
                    return (
                        <SingleComment key={comment.id}>
                            <h3> {commentator} <span> {text} </span> </h3>
                        </SingleComment>
                    )
                }) : 
                comments.map(comment => {
                    const {commentator, text} = comment.data
                    return (
                        <SingleComment key={comment.id}>
                            <h3> {commentator} <span> {text} </span> </h3>
                        </SingleComment>
                    )
                })
            }

            <form onSubmit={handleCommentInput} >
                <CommentInputSmileyIcon />
                <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment..."/>
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
        cursor: pointer;
    }
    
    > p:hover {
        text-decoration: underline;
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
