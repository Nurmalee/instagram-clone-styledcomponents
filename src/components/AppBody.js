import React, { useState, useEffect } from 'react'
import Post from './Post'
import Header from './Header';
import Stories from './Stories';
import styled from 'styled-components'
import Profile from './Profile';
import PostInput from './PostInput'
import { BsPlusCircle } from 'react-icons/bs';
import { appDb } from '../config/firebaseConfig'

const AppBody = () => {
    const [posts, setPosts] = useState([])
    const [inputError, setInputError] = useState("")
    const [showPostInput, setShowPostInput] = useState(false);

    useEffect(() => {
        appDb.collection("posts").orderBy("createdAt", "desc").onSnapshot(snap => {
            setPosts(snap.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })

    }, [])

    const onPostButtonClick = () => {
        setShowPostInput(!showPostInput)
        setInputError("")
    }


    return (
        <>
        <Header />
        <AppBodyContainer>
            <MainBody>
                <Stories />

                {
                    posts.map(post => {
                        const {name, userPicture, uploadedImage, text, createdAt} = post.data
                        return (
                            <Post key={post.id} postId={post.id} name={name} text={text} userPicture={userPicture} createdAt={createdAt} uploadedImage={uploadedImage} />
                        )
                    })
                }

            </MainBody>

            <AddPostButton onClick={onPostButtonClick}>
                { !showPostInput && <p>create a post</p> }
                <PlusIcon />
            </AddPostButton>

            <ProfileContainer>
                <Profile />
            </ProfileContainer>

            <PostInput showPostInput={showPostInput} setShowPostInput={setShowPostInput} inputError={inputError} setInputError={setInputError} />
               
        </AppBodyContainer>
        </>
    )
}

export default AppBody

const AppBodyContainer = styled.main`
    /* border: 2px solid #ccc; */
    display: flex;
    margin: 0 auto;
    /* margin-top: 50px; */
    max-width: 930px;

    @media (max-width: 900px) {
        max-width: 600px;
    }
`

const MainBody = styled.section`
    flex: 0.65;
    width: 65%;

    @media (max-width: 900px) {
        flex: 1;
    }
`

const ProfileContainer = styled.section`
    flex: 0.35;
    width: 35%;
    /* border: 1px solid #ccc; */
    position: relative;

    @media (max-width: 900px) {
        display: none;
    }
`
const AddPostButton = styled.div`
    height: max-content;
    width: max-content;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* background-color: white; */
    border-radius: 50px;
    
    
    z-index: 100;

    > p {
        background-color: white;
        border-radius: 50px;
        box-shadow: 0 0 10px black;
        transition: 1000ms;

        text-transform: capitalize;
        font-size: 14px;
        font-weight: 500;
        padding: 0 10px;
        opacity: 0;
    }

    :hover > p {
        opacity: 1;
    }
`

const PlusIcon = styled(BsPlusCircle)`
    color: #333;
    background-color: white;
    box-sizing: border-box;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 10px black;
    transition: 1000ms;
    position: relative;

    :hover {
        transform: rotate(1080deg)
    }
`
