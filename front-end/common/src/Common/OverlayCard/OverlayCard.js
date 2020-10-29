import React from 'react'
import './OverlayCard.css'

const OverlayCard = ({ Icon }) => {
    return (
        <div class="homecard">
            <div className="homecard__img">
                {Icon}
            </div>
            <div className="homecard__overlay">
                <div className="overlay__text">
                    <h3>Click</h3>
                </div>
            </div>

        </div>
    )
}


export default OverlayCard
