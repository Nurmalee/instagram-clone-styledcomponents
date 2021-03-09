import React, { useState } from 'react'
import styled from 'styled-components'
import { MdCloudUpload } from 'react-icons/md';
import { RiSendPlaneLine } from 'react-icons/ri';
import { instagramCloneDb, instagramCloneStorage, firebaseServerTime } from '.././config/firebaseConfig'


const PostInput = ({showPostInput, setShowPostInput}) => {

    const [textInput, setTextInput] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const [progress, setProgress] = useState(null)
    const imageType = ["image/png", "image/jpg", "image/jpeg", "image/JPG", "image/JPEG", "image/PNG"]

    const handlePostSubmit = (e) => {
        e.preventDefault()
        
        if(textInput || imageFile){
            const instagramCloneStorageRef = instagramCloneStorage.ref(`images/${imageFile.name}`)
            instagramCloneStorageRef.put(imageFile).on("state_changed", (snap) => {
                let percentage = (snap.bytesTransferred/snap.totalBytes) * 100
                setProgress(percentage)
            }, (error) => {
                alert(error)
            }, async () => {
                const imageUrl = await instagramCloneStorageRef.getDownloadURL()

                instagramCloneDb.collection("posts").add({
                    name: "Nurmalee",
                    userPicture: null,
                    uploadedImage: imageUrl,
                    text: textInput,
                    timestamp: firebaseServerTime,
                })
                setTextInput("")
                setProgress(null)
                if(imageUrl){
                    setShowPostInput(false)
                }
                setImageFile(null)
            })
        } else if (textInput && !imageFile){
            instagramCloneDb.collection("posts").add({
                name: "Nurmalee",
                userPicture: null,
                text: textInput,
                timestamp: firebaseServerTime,
            })
            setTextInput("")
            setProgress(0)
            setShowPostInput(false)
        }
    }

    const attachImageFile = (e) => {
        let selectedImageFile = e.target.files[0];
        if(selectedImageFile && imageType.includes(selectedImageFile.type)){
            setImageFile(selectedImageFile)
            console.log(selectedImageFile)
        } else {
            setImageFile(null)
            // return ;
        }
    }

    if(showPostInput){
        return (
            <Backdrop>
            <PostFormContainer>
                <form onSubmit={handlePostSubmit}>
                    <textarea rows={8} placeholder="Say something about this post or just upload a picture..." value={textInput} onChange={(e) => setTextInput(e.target.value)} />

                    <div>
                        <label htmlFor='file'>
                            <MdCloudUpload style={{height: "20px", width: "20px", marginRight: "10px"}}/>
                            <p>upload image</p>
                            <input type='file' id='file' onChange={attachImageFile} />
                        </label>
                        <button type="submit" > <RiSendPlaneLine  style={{height: "20px", width: "20px", marginRight: "10px"}} /> send post </button>
                    </div>
                    {progress && <ImageUploadProgressBar style={{width: `${progress}%`}}></ImageUploadProgressBar>}
                </form>
            </PostFormContainer>
            </Backdrop>
        )
    }
     return null;
}

export default PostInput

const Backdrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.7);
`

const PostFormContainer = styled.div`
    display: grid;
    margin: 100px auto;
    max-width: 450px;
    /* border: 2px solid; */
    text-align: center;

    > form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    > form > textarea {
        padding: 20px;
        outline: none;
        border: none;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    > form > div {
        display: flex;
    }

    > form > div > button, form > div > label {
        flex: 1;
        padding: 10px 0;
        text-transform: capitalize;
        background-color: #333;
        color: white;
        border-top: 1px solid;
        border-left: none;
        border-right: none;
        border-bottom: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        transition: 1000ms;
        /* border-radius: 5px; */
    }

    >  form > div > label {
        padding: 0;
        background-color: white;
        color: black;
        border-top: 1px solid;
        border-left: none;
        border-right: 1px solid;
        cursor: pointer;
        > p {
            font-size: 14px;
        }
    }

    > form > div > button:hover,
    form > div > label:hover {
        background-color: black;
        color: white;
        border: 1px solid;
    }

    > form > div > label > input {
        width: 0.1px;
	    height: 0.1px;
	    opacity: 0;
	    overflow: hidden;
	    position: absolute;
	    z-index: -1;
    }
`

const ImageUploadProgressBar = styled.div`
height: 3px;
border-radius: 50px;
background-color: red;
`