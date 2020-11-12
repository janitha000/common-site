import React from 'react'
import Banner from '../Banner/Banner'
import OverlayCard from '../Common/OverlayCard/OverlayCard'
import OverlayBoxCard from '../Common/OverlayBoxCard/OverlayBoxCard'
import { useFetch } from '../Hooks/useFetch'

import AdbIcon from '@material-ui/icons/Adb';

const Home = () => {
    const url = 'https://cbmb5jis7g.execute-api.ap-southeast-1.amazonaws.com/dev/user/test2'
    const { isLoading, error, data } = useFetch(url);

    return (
        <div className="home">
            <Banner />
            <div style={{ display: 'flex' }}>
                <OverlayCard Icon={<AdbIcon style={{ fontSize: 200 }} />} />
                <OverlayBoxCard Icon={<AdbIcon style={{ fontSize: 200 }} />} />
                {!isLoading && <p>{data.name}</p>}
            </div>

        </div>
    )
}


export default Home
