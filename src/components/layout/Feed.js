import React, { useState, useEffect } from 'react'
import { ListTexts } from './ListTexts'

export const Feed = () => {

    const [texts, setTexts] = useState([])

    const getTexts = async() => {
        try {
            const res = await fetch('http://localhost:5000/text/all', {
                method: 'GET',
                headers: {
                    'x-auth-token': localStorage.token
                }
            })

            const parseRes = await res.json()

            setTexts(parseRes)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect( () => {
        getTexts()
    }, [])

    return (
        // <div className='texts-container'>
            <ListTexts allTexts={texts} />
        // </div>
    )
}
