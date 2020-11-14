import React, { useState, useEffect } from 'react'
import { Link }  from 'react-router-dom'

export const Profile = ({ username, user }) => {

    const [texts, setTexts] = useState({})

    const getTexts = () => {
        try {
            const res = fetch('http://localhost:5000/text/user', {
                method: 'GET',
                headers: {
                    'x-auth-token': localStorage.token
                }
            }).then( res => res.json())
            .then(data => setTexts(data))

            //const parseRes = await res.json()

        } catch (err) {
            console.log(err.message)            
        }
    }


    useEffect( () => {
        getTexts()
    }, [])

    return user.length === 0 ? (
        <div>
            loading...
        </div>
    ) : (
        <div>
            <div className='profile-container'>
                <div className='profile-item'>
                    Email: {user.email}
                </div>
                <div className='profile-item'>
                    Name: {user.name}
                </div>
                <div className='profile-item'>
                    Username: {user.username}
                </div>
                {
                    user.bio !== null ? (
                    <div className='profile-item'>
                        Bio: {user.bio}
                    </div> ) : ( <div> </div>)
                }
                {/* {
                    user.location !== null ? (
                    <div className='profile-item'>
                        Location: {user.location}
                    </div> ) : ( <div> </div> )
                } */}
                {
                    user.age !== null ?  (
                    <div className='profile-item'>
                        Age: {user.age}
                    </div> ) : ( <div> </div>)
                }
                {
                    texts.length !== 0 ? (
                    <div className='profile-item'>
                        Texts count: {texts.length}
                    </div>
                    ) : ( <div> eeh </div>)
                }
            </div>
        </div>
    )
}
