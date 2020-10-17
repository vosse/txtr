import React, { useState, useEffect } from 'react'

export const UserPage = ({ match }) => {

    console.log(match.params.username)

    const [user, setUser] = useState({})

    const getUserInfo = async () => {
        try {
            const res = await fetch(`http://localhost:5000/user/get/${match.params.username}`, {
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


    return (
        <div>
            {user.username}
        </div>
    )
}
