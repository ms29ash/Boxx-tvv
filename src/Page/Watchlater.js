import React from 'react'
import List from '../Components/List'
import { useSelector } from 'react-redux'



function Watchlater() {

    const data = useSelector((state) => state.list?.watchLater);
    return (
        <div>
            <List data={data} />

        </div>
    )
}

export default Watchlater
