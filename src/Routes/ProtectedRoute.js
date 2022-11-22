import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Loading from '../Components/Loading'
import { fetchUser } from '../features/user/userSlice'

function ProtectedRoute({ children }) {
    const cookies = new Cookies();
    const { signedIn, loading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = cookies.get('token')

    useEffect(() => {

        if (signedIn === true) {
            return
        } else if (signedIn === null || signedIn === false) {
            if (token) {
                try {
                    dispatch(fetchUser(token));
                } catch (e) {
                    console.log(e)
                }
            } else {
                navigate('/signin', { replace: true })
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {
                signedIn === true && children
            }
            {
                loading === true && <Loading />
            }
        </>
    )
}

export default ProtectedRoute