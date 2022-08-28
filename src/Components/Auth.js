import React from 'react'
import AuthProtected from './AuthProtected'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Auth() {
    const signedIn = useSelector(state => state.user.signedIn);
    return (
        <>
            <AuthProtected />

            {
                signedIn === false &&

                (<Outlet />)
            }
        </>
    )
}

export default Auth