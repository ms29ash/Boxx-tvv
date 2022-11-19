import React from 'react'
import List from '../Components/List'
import { useSelector } from 'react-redux'

function Favorites() {
    const data = useSelector(state => state.list.favorites)
    return (
        <List data={data} />
    )
}

export default Favorites