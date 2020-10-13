import React, { useState, useEffect } from 'react'

export const ListTexts = ({ allTexts }) => {

    // const [texts, setTexts] = useState([])

    // useEffect( () => {
    //     setTexts(texts)
    // }, [])


    return (
        <div className='text-container'>
            oof
            {
                 allTexts.length !== 0 && allTexts.map( (t) => (
                    <li key={t.id}>
                        Text: {t.text}
                    </li>
                ))
            }
        </div>
    )
}
