import React from 'react'

export const Navbar = ({ isAuth, setAuth }) => {

    const logout = () => {
        setAuth(false)
    }
    
    const login = () => {
        setAuth(true)
    }

    console.log(isAuth)

    const authLinks = (
        <ul className='ul-links'>
            <li>
                User
            </li>
            <li>
                Home
            </li>
            <li>
                Logout
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className='ul-links'>
        <li>
            Home
        </li>
        <li>
            Sign In
        </li>
        <li>
            Sign Up
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
            <div>
                <button onClick={login}>login</button>
                <button onClick={logout}>logout</button>
            </div>
            <div className='nav-links'>

            </div>
        </div>
    )
}
