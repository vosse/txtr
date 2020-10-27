import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ user, isAuth, setAuth }) => {

    const [active, setActive] = useState(false)

    const toggler = () => {
        setActive(!active)
    }

    const logout = () => {
        setAuth(false)
        localStorage.removeItem('token')
    }

    const authLinks = (
        <ul className={`ul-links active-${active}`}>
            <li className='navlink-item'>
                <a href={`/user/${user.username}`}>{user.username}</a>
            </li>
            <li className='navlink-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='navlink-item'>
                <button className='logout-btn' onClick={logout}>Logout</button>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className={`ul-links active-${active}`}>
            {/* <li className='navlink-item'>
                <Link className='home-btn' to='/feed'>Home</Link>
            </li> */}
            <li className='navlink-item'>
                <Link className='login-btn' to='/signin'>Login</Link>
            </li>
            <li className='navlink-item'>
                <Link className='signup-btn' to='/signup'>Sign Up</Link>
            </li>
        </ul>
    )

    return (
        <div className='nav-container'>
            <div className='nav-brand'>
                txt<span className='yellow-letter'>r</span>
            </div>
                        <div onClick={toggler} className="burger">
                <div className="line1"></div>
                <div className="line1"></div>
                <div className="line1"></div>
            </div>
            {/* <div className={`nav-links`}> */}
            { 
                isAuth ? ( authLinks ) : ( guestLinks )
            }
            {/* </div> */}

        </div>
    )
}
