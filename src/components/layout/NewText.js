import React, { useState } from 'react'

export const NewText = ({ texts, setTexts }) => {

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {

            const body = { text }

            const res = await fetch('http://localhost:5000/text/new', {
                method: 'POST',
                headers: {
                    'x-auth-token': localStorage.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const parseRes = await res.json()
            setTexts([ ...texts, parseRes ])
            console.log(parseRes)
        } catch (err) {
            console.log(err.message)
        }

        setText('')
    }

    return (
        <div className='text-form-container'>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label>Text</label>
                    <input
                        type='text'
                        className='form-control'
                        name='text'
                        placeholer="What's on your mind?"
                        value={text}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <button type='submit' >Text</button>
            </form>
            
        </div>
    )
}
