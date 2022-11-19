import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (
        <>
            <Container>
                <Logo src="./images/Logo.png" alt="" />
                <Spinner src="/spinner.gif" alt="" />
            </Container>
        </>
    )
}

export default Loading


const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;

`
const Logo = styled.img`
width:200px;

`
const Spinner = styled.img`
margin-top:20px;
margin-left:20px;
width:150px;
`
