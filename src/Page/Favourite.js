import React from 'react'
import List from '../Components/List'
import { useSelector } from 'react-redux'

function Favourite() {
    const data = useSelector(state => state.favourite.favourite)
    return (
        <List data={data} />
    )
}

export default Favourite