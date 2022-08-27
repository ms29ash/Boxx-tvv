import React from 'react'
import Intro from '../Components/Intro'
import Channels from '../Components/Channels'
import Categories from '../Components/Categories'
import ImageSlider from '../Components/ImageSlider'




function Home() {
    return (
        <div>
            <Intro type='movies' />
            <Channels />
            <Categories />
            <ImageSlider title='movies' />
            <ImageSlider title='shows' />
            <ImageSlider title='anime' />
        </div>
    )
}

export default Home