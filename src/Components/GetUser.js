import React, { useEffect } from 'react'
import axios from '../axios'
import Cookies from 'universal-cookie';
import { addUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function GetUser() {
    const cookies = new Cookies();
    const signedIn = useSelector(state => state.user.signedIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {


            try {
                if (signedIn === false) {
                    const token = cookies.get('token')
                    if (token) {

                        const response = await axios.post('/auth/user', { token: token });

                        dispatch(addUser(response?.data))
                    } else {
                        navigate('/signin', { replace: true })
                        return
                    }

                } else {
                    return
                }
            }
            catch (error) {
                console.error(error);
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

export default GetUser