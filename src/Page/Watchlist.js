import React from 'react'
import List from '../Components/List'
import { useSelector } from 'react-redux'



function Watchlist() {

    const data = useSelector((state) => state.watchlist.watchlist);
    return (
        <div>
            <List data={data} />

        </div>
    )
}

export default Watchlist
