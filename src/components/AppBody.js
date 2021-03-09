import React, { useState, useEffect } from 'react'
import Post from './Post'
import Stories from './Stories';
import styled from 'styled-components'
import Profile from './Profile';
import PostInput from './PostInput'
import { BsPlusCircle } from 'react-icons/bs';
import { instagramCloneDb } from '.././config/firebaseConfig'

const AppBody = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        instagramCloneDb.collection("posts").orderBy("createdAt", "desc").onSnapshot(snap => {
            setPosts(snap.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        })

    }, [])

    const [showPostInput, setShowPostInput] = useState(false);

    return (
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

                <Post name="Nurmalee" text="What an exquisite design!!!" uploadedImage="https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                {/* <Post name="Cristiano" text="Fruit is life!!!, I eat this fruits to stay fit and recover after every football game" uploadedImage="https://images.unsplash.com/photo-1551240370-1da11d874ed9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8X2hiLWRsNFEtNFV8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}

                {/* <Post name="WHoever Sends" location="Sender's Location" image="https://images.unsplash.com/photo-1614970800312-cf7417e37086?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post name="WHoever Sends" location="Sender's Location" image="https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post name="WHoever Sends" location="Sender's Location" image="https://images.unsplash.com/photo-1572177218317-9e83f9a87971?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post name="WHoever Sends" location="Sender's Location" image="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                <Post name="WHoever Sends" location="Sender's Location" image="https://avatars.githubusercontent.com/u/70635657?s=460&u=eea4bb2b6dff02e5993458cecc93018eca3bd17d&v=4" /> */}

            </MainBody>

            <AddPostButton onClick={() => setShowPostInput(!showPostInput)}>
                <p>create a post</p>
                <PlusIcon />
            </AddPostButton>

            <ProfileContainer>
                <Profile />
            </ProfileContainer>

            <PostInput showPostInput={showPostInput} setShowPostInput={setShowPostInput} />
               
        </AppBodyContainer>
    )
}

export default AppBody

const AppBodyContainer = styled.main`
    /* border: 2px solid #ccc; */
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 930px;

    @media (max-width: 900px) {
        max-width: 600px;
    }
`

const MainBody = styled.section`
    flex: 0.65;

    @media (max-width: 900px) {
        flex: 1;
    }
`

const ProfileContainer = styled.section`
    flex: 0.35;
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
