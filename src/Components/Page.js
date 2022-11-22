import React from 'react'
import styled from 'styled-components';
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import Header from './Header';


const Container = styled.div`
display:flex;
max-height: 100vh;
overflow:hidden;
`

const Main = styled.div`
overflow-y:scroll;
overflow-x:hidden;
width:69vw;
@media screen and (min-width:1000px) and (max-width:100000px) {
    width:calc(100vw - 200px)
}
@media screen and (min-width:0px) and (max-width:1024px) {
    width:100vw;
}
`;

function Page() {

    return (
        <>
            <Container>
                <SideMenu />
                <Main id="scroll" >
                    <Header />
                    <Outlet />
                </Main>
            </Container>

        </>
    )
}

export default Page