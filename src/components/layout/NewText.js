import React, { useState } from 'react'

export const NewText = ({ texts, getTexts }) => {

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
            var parseRes = await res.json()
            getTexts()
            console.log(parseRes)
        } catch (err) {
            console.log(err.message)
        }
        
        setText('')
    }

    return (
        <div className='text-form-container'>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group nt-form'>
                    {/* <label>Text</label> */}
                    <div className='form-wrapper'>
                        <input
                            type='text'
                            className='form-control nt-form-control'
                            name='text'
                            placeholder="What's on your mind?"
                            value={text}
                            onChange={(e) => onChange(e)}
                            required="required"
                        />
                    </div>
                    <button  id='nt-button' type='submit' >Text</button>
                </div>
            </form>
            
        </div>
    )
}
