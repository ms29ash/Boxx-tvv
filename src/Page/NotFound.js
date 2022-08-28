import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 100vw;
height: 100vh;
object-fit:cover;
`

function NotFound() {
    return (
        <Img src="./images/404.jpg" alt="" />
    )
}

export default NotFound
