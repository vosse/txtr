import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = ({ isAuth, setAuth }) => {

    const [input, setInput] = useState({
        email: '',
        username: '',
        name: '',
        password: ''
    })

    const { email, username, name, password } = input

    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const body = { email, username, name, password }

        try {
            
            const res = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })


            const parseRes = await res.json()

            if (parseRes.token) {
                localStorage.setItem('token', parseRes.token)
                setAuth(true)
            } else {
                setAuth(false)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className='register-container'>
        <div id='reg-form' className='register-form'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='login-header'>
                    Create your account
                </div>
                <div className='reg-form-group'>
                    <label className='form-label'>Email</label>
                    <input
                        type="text"
                        className='reg-form-control'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='reg-form-group'>
                    <label className='form-label'>Username</label>
                    <input
                        type="text"
                        className='reg-form-control'
                        name='username'
                        value={username}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='reg-form-group'>
                    <label className='form-label'>Name</label>
                        <input
                            type="text"
                            className='reg-form-control'
                            name='name'
                            value={name}
                            onChange={(e) => onChange(e)}
                        />
                </div>
                <div className='reg-form-group'>
                    <label className='form-label'>Password</label>
                    <input
                        type="password"
                        className='reg-form-control'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='continue-btn-wrapper'>
                    <button className='continue-btn'><span id='btn-txt'>Continue</span></button>
                    </div>
                    <div className='dha-btn'>Have an account? <Link to='/signup'>Sign In</Link></div>
            </form>
        </div>
    </div>
    )
}
