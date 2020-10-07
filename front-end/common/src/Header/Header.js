import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`header ${show && 'header__black'}`}>
            <div className="header__left">

            </div>
            <div className="header__right">
                <h3 className="header__item"><Link to='/'>Home</Link></h3>
                <h3 className="header__item"><Link to='/articles'>Articles</Link></h3>
                <h3 className="header__item"><Link to='/contact'>Contact</Link></h3>
            </div>

        </div>
    )
}



export default Header
