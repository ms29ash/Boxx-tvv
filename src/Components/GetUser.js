import React, { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { fetchUser, removeUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

function GetUser() {
    const cookies = new Cookies();
    const signedIn = useSelector(state => state.user.signedIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchUserData = () => {
            if (signedIn === false || signedIn === null) {
                const token = cookies.get('token')
                if (token) {
                    try {
                        dispatch(fetchUser(token));
                        // navigate.goBack();
                    }
                    catch (error) {
                        console.error(error);
                    }
                } else {
                    dispatch(removeUser())

                    if (pathname === '/signup' || pathname === 'signin' || pathname === '/signup/otp' || pathname === '/signup/password') {
                        return
                    } else {

                        navigate('/signin', { replace: true })
                    }
                    return
                }

            } else {
                return
            }
        }
        fetchUserData();
    },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])
    return (
        <></>
    )
}

export default GetUser