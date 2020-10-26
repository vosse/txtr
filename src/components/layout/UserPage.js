import React, { useState, useEffect } from 'react'

export const UserPage = ({ username }) => {

    //console.log(match.params.username)

    const [user, setUser] = useState({})

    const getUserInfo = async () => {
        try {
            const res = await fetch(`http://localhost:5000/user/get/${username}`, {
                method: 'GET'
            })

            const parseRes = await res.json()

            console.log(parseRes)

            setUser(parseRes)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect( () => {
        getUserInfo()
    }, [])

    const dateFormatter = (date) => {
        return date.substring(0, 10)
    }


    return (
        <div>
            {/* { user.texts.map( (t) => (
                <div>
                    {t.text}
                </div>
            ))} */}

            { user.texts ? <div className='texts-container'>
                {
                    user.texts.map((t) => (
                        <div className='text-wrapper'>
                            <div className='text-header-wrapper'>
                            <div className='text-name'>
                                {user.name}<span>{'  '}</span> <span className='text-username'>@{user.username}</span>
                            </div>
                            <div className='text-date'>
                                {dateFormatter(t.created_at)}
                            </div>
                            </div>
                            <div className='text-content'>
                                {t.text}
                            </div>
                        </div>
                    ))
                }

            </div> : <div>User doesnt exist</div>}
        </div>
    )
}
