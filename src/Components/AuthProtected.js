import React, { useEffect } from 'react'
import axios from '../axios'
import Cookies from 'universal-cookie';
import { addUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function AuthProtected() {
    const cookies = new Cookies();
    const signedIn = useSelector(state => state.user.signedIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            if (signedIn === false) {
                try {
                    const token = cookies.get('token')
                    if (token) {

                        const response = await axios.post('/auth/user', { token: token });
                        console.log(response);
                        dispatch(addUser(response?.data))
                        navigate('/', { replace: true })
                    } else {

                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                navigate('/', { replace: true })

            }
        }
        fetchUser();
    },
        // eslint-disable-next-line 
        [])
    return (
        <></>
    )
}

export default AuthProtected