import React from 'react'
import './Avatar.css'

const Avatar = ({ img }) => {
    return (
        <div className="avatar">
            <img src={img} alt="avatar_image" />
        </div>
    )
}

export default Avatar
