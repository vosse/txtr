import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
    return (
        <div className='landing-container'>
                    <div className='landing-title'>
                        Join the convo
                    </div>
                    <div className='subheader sh'>
                        {`Text &`}
                    </div>
                    <div className='subheader'>
                        Waste your time <span className='subtle-text'>anonymously</span>
                    </div>
                    <div className='signup-btn-container'>
                        <Link className='landing-signup-btn' to='/signup'>Sign up</Link>
                    </div>
        </div>
    )
}
