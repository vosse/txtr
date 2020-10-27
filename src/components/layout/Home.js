import React, { useState, useEffect } from 'react'
import { ListTexts } from './ListTexts'
import { NewText } from './NewText'

export const Home = () => {

    const [texts, setTexts] = useState([])
    const [loading, setLoading] = useState(true)

    const getTexts = async () => {

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
            console.log(err)
        }

        setLoading(false)

    }

    useEffect( () => {
        getTexts()
    }, [])

    return (
        <div>
            <NewText texts={texts} getTexts={getTexts} />
            {/* <div className='texts-container'> */}
                <ListTexts allTexts={texts} loading={loading} />
            {/* </div> */}
        </div>
    )
}
