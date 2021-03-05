import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="instagram"/>
            </HeaderLeft>

            <HeaderCenter>
                <SearchOutlinedIcon />
                <input type="text" placeholder="search"/>
            </HeaderCenter>

            <HeaderRight>
                <HomeIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <ExploreOutlinedIcon />
                <FavoriteBorderIcon />
                <Avatar />
            </HeaderRight>
          
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
   
`;

const HeaderCenter = styled.div`
   
`;

const HeaderLeft = styled.div`
    > img {
        height: 40px;
    }
`;

const HeaderRight = styled.div`
   display: flex;
`;

