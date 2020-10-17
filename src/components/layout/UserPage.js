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


    return (
        <div>
            {/* { user.texts.map( (t) => (
                <div>
                    {t.text}
                </div>
            ))} */}

            { user.texts ? <div>

                {
                    user.texts.map( (t) => (
                        <div>
                            {t.text}
                        </div>
                    ))
                }

            </div> : <div>User doesnt exist</div>}
        </div>
    )
}
