import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ isAuth, setAuth }) => {

    const logout = () => {
        setAuth(false)
        localStorage.removeItem('token')
    }

    const authLinks = (
        <ul className='ul-links'>
            <li>
                User
            </li>
            <li>
                Home
            </li>
            <li>
                <button onClick={logout}>Logout</button>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className='ul-links'>
            <li>
                Home
            </li>
            <li>
                <Link to='/signin'>Sign In</Link>
            </li>
            <li>
                <Link to='/signup'>Sign Up</Link>
            </li>
        </ul>
    )

    return (
        <div className='nav-container'>
            <div className='nav-brand'>
                TXTR
            </div>
            <div>
                is logged in? {isAuth}
            </div>
            <div className='nav-links'>
            { 
                isAuth ? ( authLinks ) : ( guestLinks )
            }
            </div>
        </div>
    )
}
