import React from 'react'


const Banner = () => {
    const bannerUrl = "https://wallpaperaccess.com/full/1251284.jpg"
    return (
        <header className="banner"
            style={{
                objectFit: "contain",
                backgroundSize: "cover",
                backgroundImage: `url(${bannerUrl})`,
                height: '600px'
            }}>
        </header>
    )
}


export default Banner
