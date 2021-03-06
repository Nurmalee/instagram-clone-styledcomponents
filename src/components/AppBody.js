import React from 'react'
import Post from './Post'
import Stories from './Stories';
import styled from 'styled-components'

const AppBody = () => {
    return (
        <AppBodyContainer>
            <Stories />
            <Post />        
        </AppBodyContainer>
    )
}

export default AppBody

const AppBodyContainer = styled.section`

`


