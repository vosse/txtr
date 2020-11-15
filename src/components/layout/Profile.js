import React, { useState, useEffect } from 'react'
import { Link, useHistory }  from 'react-router-dom'

export const Profile = ({ username, user, setIsAuth, isAuth }) => {

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

    const history = useHistory()

    const routeBack = () => {

        //if(localStorage.token) {
            
        //}
        localStorage.clear()
        //setIsAuth(!isAuth)
        window.location.href='/'
        
       // history.push('/signin')
    }


    const deleteUser = async () => {


        try {
            const res = fetch(`http://localhost:5000/user/delete/${username}`, {
                method: 'DELETE',
                headers: {
                    'x-auth-token': localStorage.token
                }
            }).then( res => res.json()).catch( (err) => console.log(err))


            //logout()
            routeBack()

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
                    ) : ( <div></div>)
                }
                <div className='btn-wrapper'>
                    <Link className='update-btn' to={`/u/${user.username}/update`}>Edit</Link>
                    <button onClick={deleteUser} className='del-btn'>Delete</button>
                </div>
            </div>
        </div>
    )
}
