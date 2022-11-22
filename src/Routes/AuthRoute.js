import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { fetchUser } from '../features/user/userSlice'
import Loading from '../Components/Loading'

function AuthRoute({ children }) {
    const cookies = new Cookies();
    const { signedIn, loading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = cookies.get('token')

    useEffect(() => {
        if (signedIn === true) {
            navigate('/', { replace: true });
        } else if (signedIn === null) {
            if (token) {
                try {
                    dispatch(fetchUser(token));
                } catch (e) {
                    console.log(e)
                }
            } else {
                return
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                (signedIn === false || signedIn === null) && children
            }
            {
                loading === true && <Loading />
            }
        </>
    )
}

export default AuthRoute