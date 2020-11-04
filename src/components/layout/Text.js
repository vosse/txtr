import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Text = ({ text_id }) => {

    const [text, setText] = useState()

    const getText = async () => {
        
        try {
            // fetch(`http://localhost:5000/text/${text_id}`, {
            //     method: 'GET',
            //     headers: {
            //         'x-auth-token': localStorage.token
            //     }
            // }).then( res => res.json())
            // .then( data => setText(data))

            const res = await fetch(`http://localhost:5000/text/${text_id}`, {
                method: 'GET',
                headers: {
                            'x-auth-token': localStorage.token
                }
            })

            const parseRes = await res.json()

            setText(parseRes)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect( () => {
        getText()
    }, [])


    const dateFormatter = (date) => {
        return date.substring(0, 10)
    }

    
    
    return (
        <div className='texts-container'>
            { text && 
                <div className='text-wrapper'>
                    <div className='text-header-wrapper'>
                        <div className='text-name'>
                            {text.user.name}<span>{'  '}</span><Link to={`/user/${text.user.username}`}><span className='text-username'>@{text.user.username}</span></Link>
                        </div>
                        <div className='text-date'>
                        {   dateFormatter(text.created_at)}
                        </div>
                    </div>
                    <div className='text-content'>
                        {text.text}
                    </div>
                </div>
            /* : (<div>loading</div>) */ }
        </div>
    )
}
