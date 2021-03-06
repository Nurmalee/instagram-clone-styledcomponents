import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BsHeart, BsCompass } from 'react-icons/bs';
import { RiMessengerLine, RiHome5Fill } from 'react-icons/ri';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBar>
                <HeaderLeft>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="instagram"/>
                </HeaderLeft>

                <HeaderCenter>
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search"/>
                </HeaderCenter>

                <HeaderRight>
                    <HomeIcon />
                    <MessengerIcon />
                    <CompassIcon />
                    <HeartIcon />
                    <HeaderAvatar src="https://firebasestorage.googleapis.com/v0/b/linkedin-webapp-clone.appspot.com/o/images%2FLee%20Logo.png?alt=media&token=1927abc3-7155-4a13-9bb5-fb4c245c2e14" />
                </HeaderRight>
            </HeaderBar>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    background-color: white;
    border-bottom: 1px solid #ccc;
`

const HeaderBar = styled.nav`
    background-color: white;
    max-width: 970px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 10px;
`

const HeaderLeft = styled.div`
    > img {
        height: 45px;
        object-fit: contain;
        cursor: pointer;
    }
`

const HeaderCenter = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 3px;
    padding: 4px 15px;
    background-color: whitesmoke;
    color: #bbb;

    > .MuiSvgIcon-root {
        height: 15px !important;
        width: 15px !important;
        cursor: pointer;
   }

    > input[type="text"] {
        background-color: inherit;
        color: black;
        border: none;
        font-weight: 100;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        outline: none;
        margin-left: 3px;
        flex: 0.3;
        width: 30%;
        :focus {
            flex: 1;
            width: 100%;
        }
    }

    @media (min-width: 600px) {
        display: flex;
    }
`

const HeaderRight = styled.div`
    flex: 0.75;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width:700px){
        flex: 0.4;
    }
`

const HeaderAvatar = styled(Avatar)`
   cursor: pointer;
   height: 25px !important;
   width: 25px !important;
   border: 1px solid #ccc;
`;

const HomeIcon = styled(RiHome5Fill)`
    height: 25px;
    width: 25px;
    cursor: pointer;
`

const MessengerIcon = styled(RiMessengerLine)`
    height: 25px;
    width: 25px;
    cursor: pointer;
`

const CompassIcon = styled(BsCompass)`
    height: 23px;
    width: 23px;
    cursor: pointer;
`

const HeartIcon = styled(BsHeart)`
    height: 23px;
    width: 23px;
    cursor: pointer;
`