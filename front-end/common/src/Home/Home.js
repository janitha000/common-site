import React from 'react'
import Banner from '../Banner/Banner'
import OverlayCard from '../Common/OverlayCard/OverlayCard'
import OverlayBoxCard from '../Common/OverlayBoxCard/OverlayBoxCard'

import AdbIcon from '@material-ui/icons/Adb';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div style={{ display: 'flex' }}>
                <OverlayCard Icon={<AdbIcon style={{ fontSize: 200 }} />} />
                <OverlayBoxCard Icon={<AdbIcon style={{ fontSize: 200 }} />} />
            </div>

        </div>
    )
}


export default Home
