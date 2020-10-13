import React, { useState, useEffect } from 'react'
import { ListTexts } from './ListTexts'
import { NewText } from './NewText'

export const Home = () => {

    const [texts, setTexts] = useState([])

    const getTexts = async () => {

        try {
            const res = await fetch('http://localhost:5000/text/user', {
                method: 'GET',
                headers: {
                    'x-auth-token': localStorage.token
                  }
            })
            const parseRes = await res.json()

            setTexts(parseRes)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect( () => {
        getTexts()
    }, [])

    return (
        <div>
            Home
            <NewText texts={texts} setTexts={setTexts} />
            <ListTexts allTexts={texts} />
        </div>
    )
}
