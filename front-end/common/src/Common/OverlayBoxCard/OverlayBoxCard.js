import React from 'react'
import './OverlayBoxCard.css'

export const OverlayBoxCard = ({ Icon }) => {
    return (
        <div className="box">
            <div className="box__icon">
                {Icon}
            </div>
            <div className="box__middle">
                <div className="box__text">
                    <h3>Click</h3>
                </div>
            </div>
        </div>
    )
}

export default OverlayBoxCard;
