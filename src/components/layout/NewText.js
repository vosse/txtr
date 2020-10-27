import React, { useState } from 'react'

export const NewText = ({ texts, getTexts }) => {

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
        let tx = document.querySelector('.nt-form-control');
        for (let i = 0; i < tx.length; i++) {
          tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        }
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

                    <div className='form-wrapper'>
                        <textarea
                            type='text'
                            className='nt-form-control'
                            name='text'
                            placeholder="What's on your mind?"
                            value={text}
                            onChange={(e) => onChange(e)}
                            required="required"
                            maxLength="255"
                        />
                    </div>
                    <div className='nt-wrapper'>
                        <div className='text-counter'>{255-text.length}</div>
                        <button  id='nt-button' type='submit' >Text</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
