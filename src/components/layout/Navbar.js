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
        <ul className='ul-links'>
            <li className='navlink-item'>
                <Link to={`/user/${user.username}`}>{user.username}</Link>
            </li>
            <li className='navlink-item'>
                <Link to='/feed'>Home</Link>
            </li>
            <li className='navlink-item'>
                <button onClick={logout}>Logout</button>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className='ul-links'>
            <li className='navlink-item'>
                Home
            </li>
            <li className='navlink-item'>
                <Link to='/signin'>Sign In</Link>
            </li>
            <li className='navlink-item'>
                <Link to='/signup'>Sign Up</Link>
            </li>
        </ul>
    )

    return (
        <div className='nav-container'>
            <div className='nav-brand'>
                txt<span className='yellow-letter'>r</span>
            </div>
            <div className={`nav-links active-${active}`}>
            { 
                isAuth ? ( authLinks ) : ( guestLinks )
            }
            </div>
            <div onClick={toggler} className="burger">
                <div className="line1"></div>
                <div className="line1"></div>
                <div className="line1"></div>
            </div>
        </div>
    )
}
