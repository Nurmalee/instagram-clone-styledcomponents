import React, { useState } from 'react'
import styled from 'styled-components'
import { MdCloudUpload } from 'react-icons/md';
import { RiSendPlaneLine } from 'react-icons/ri';


const PostInput = ({showPostInput, setShowPostInput}) => {

    const [textInput, setTextInput] = useState("")

    const handlePostSubmit = (e) => {
        e.preventDefault()
        // setShowPostInput(false)
        
    }

    if(showPostInput){
        return (
            <Backdrop>
            <PostFormContainer>
                <form onSubmit={handlePostSubmit}>
                    <textarea rows="10" placeholder="Say something about this post or just upload a picture..." value={textInput} onChange={(e) => setTextInput(e.target.value)} />

                    <div>
                        <button> <MdCloudUpload style={{height: "20px", width: "20px", marginRight: "10px"}}/> upload image </button>
                        <button type="submit" > <RiSendPlaneLine  style={{height: "20px", width: "20px", marginRight: "10px"}} /> send post </button>
                    </div>
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    > form > div {
        display: flex;
    }

    > form > div > button {
        flex: 1;
        padding: 10px 0;
        text-transform: capitalize;
        /* border: 2px solid; */
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        /* border-radius: 5px; */
    }

`