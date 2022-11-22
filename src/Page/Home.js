import React from 'react'
import Intro from '../Components/Intro'
import Channels from '../Components/Channels'
import Categories from '../Components/Categories'
import ImageSlider from '../Components/ImageSlider'
import Footer from '../Components/Footer'




function Home() {
    return (
        <div>
            <Intro type='movies' />
            <Channels />
            <Categories />
            <ImageSlider title='movies' />
            <ImageSlider title='shows' />
            <ImageSlider title='anime' />
            <Footer />
        </div>
    )
}

export default Home