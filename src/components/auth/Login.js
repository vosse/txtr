import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = ({ isAuth, setAuth }) => {

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const { username, password } = input




    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const body = { username, password }

        try {
            const res = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
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
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                        Sign in to your account
                    </div>
                    <div className='form-group'>
                        <label>Email / Username</label>
                        <input
                            type="text"
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type="password"
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <button>Continue</button>
                    <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
                </form>
            </div>
        </div>
    )
}
