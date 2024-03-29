import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { VscSmiley } from 'react-icons/vsc';
import { appDb, firebaseServerTime } from '.././config/firebaseConfig'
import { useUserAuth } from '.././contextAPI/userContext'

const PostComment = ({postId}) => {
    const { currentUser } = useUserAuth()

    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])
    const [showLessComments, setShowLessComments] = useState(true)

    useEffect(() => {
        appDb.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("createdAt", "desc")
        .onSnapshot(snap => {
            setComments(snap.docs
                .map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [postId])

    const handleCommentInput = (e) => {
        e.preventDefault()

        if(postId && commentText){
            appDb.collection("posts")
            .doc(postId)
            .collection("comments")
            .add({
                commentator: currentUser?.displayName,
                commentatorPic: currentUser?.photoURL,
                text: commentText,
                createdAt: firebaseServerTime
            })
            setCommentText("")
        }

    }


    return (
        <PostCommentContainer>
            {comments.length > 0 && <p onClick={() => setShowLessComments(!showLessComments) }> {showLessComments ? `View all ${comments.length} ${comments.length <= 1 ? "comment" : "comments"}` : `Show less comments` } </p>}

            {
                showLessComments ?
                comments.slice(0, 3).map(comment => {
                    const {commentator, commentatorPic, text} = comment.data
                    return (
                        <SingleComment key={comment.id}>
                            <CommentatorAvatar src={commentatorPic}> {commentator[0].toUpperCase()} </CommentatorAvatar>
                            <h3> {commentator.toLowerCase()} <span> {text} </span> </h3>
                        </SingleComment>
                    )
                }) : 
                comments.map(comment => {
                    const {commentator, commentatorPic, text} = comment.data
                    return (
                        <SingleComment key={comment.id}>
                            <CommentatorAvatar src={commentatorPic}> {commentator[0].toUpperCase()} </CommentatorAvatar>
                            <h3> {commentator.toLowerCase()} <span> {text} </span> </h3>
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

        :hover {
            text-decoration: underline;
        }
    }

    > form {
        width: 100%;
        margin-top: 10px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        border-top: 1px solid #ccc;

        > input {
            width: 100%;
            flex: 1;
            padding: 20px 10px;
            border: none;
            outline: none;
            color: #444;

            @media (max-width: 650px) {
                background-color: inherit;
            }
        }

        > button {
            padding: 10px;
            border: none;
            outline: none;
            background-color: white;
            color: red;

            @media (max-width: 650px) {
                background-color: inherit;
            }
        }

        @media (max-width: 650px) {
            background-color: inherit;
            border-bottom: 1px solid #ccc;
        }
    }
`

const SingleComment = styled.div`
    padding: 3px 15px;
    display: flex;
    align-items: center;

    >h3 {
        font-size: 12px;
        font-weight: 700;
        color: #555;
        align-self: flex-start;
        padding-top: 3px;

        > span {
            font-size: 11px;
            font-weight: 100;
            color: grey;
        }
    }
`

const CommentInputSmileyIcon = styled(VscSmiley)`
    height: 27px;
    width: 27px;
    cursor: pointer;
`
const CommentatorAvatar = styled(Avatar)`
    align-self: flex-start;
    height: 25px !important;
    width: 25px !important;
    margin-right: 5px;
`