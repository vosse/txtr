import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ user, isAuth, setAuth }) => {

    const logout = () => {
        setAuth(false)
        localStorage.removeItem('token')
    }

    const authLinks = (
        <ul className='ul-links'>
            <li>
                <Link to={`/user/${user.username}`}>{user.username}</Link>
            </li>
            <li>
                <Link to='/feed'>Home</Link>
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
                txt<span className='yellow-letter'>r</span>
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
