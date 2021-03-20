import React, { useState, useEffect } from 'react'
import Post from './Post'
import Header from './Header';
import Stories from './Stories';
import styled from 'styled-components'
import Profile from './Profile';
import PostInput from './PostInput'
import { BsPlusCircle } from 'react-icons/bs';
import { appDb } from '../config/firebaseConfig'

import { useUserAuth } from '.././contextAPI/userContext'

const AppBody = () => {
    const [posts, setPosts] = useState([])
    const [inputError, setInputError] = useState("")
    const [showPostInput, setShowPostInput] = useState(false);

    const { progress } = useUserAuth()

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


                {progress > 0 && 
                    <ImageUploadProgressBar>
                        <p>FINISHING UP YOUR UPLOAD... PLEASE HOLD ON A SECOND</p>
                        <div style={{width: `${progress}%`}}></div>
                    </ImageUploadProgressBar>
                }

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

const ImageUploadProgressBar = styled.div`
    margin-top: 20px;

    > p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 100;
        font-size: 12px;
        text-align: center;
    }

    > div {
        height: 2px;
        border-radius: 50px;
        background-color: red;
    }
   
`
