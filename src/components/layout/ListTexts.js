import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ListTexts = ({ allTexts, loading }) => {




    const dateFormatter = (date) => {
        return date.substring(0, 10)
    }

    console.log(allTexts)
    // loading === true
    return  allTexts.length === 0 ? (<div>loading...</div>) : (
        <div className='place'>
            {
                 allTexts[0].user && allTexts.length !== 0 && allTexts.map( (t) => (
                            <div className='text-wrapper'>
                                <div className='text-header-wrapper'>
                                <div className='text-name'>
                                    {t.user.name}<span>{'  '}</span> <Link to={`/user/${t.user.username}`}><span className='text-username'>@{t.user.username}</span></Link>
                                </div>
                                <div className='text-date'>
                                    {dateFormatter(t.created_at)}
                                </div>
                                </div>
                                <div className='text-content'>
                                    {t.text}
                                </div>
                                <div className='text-link'>
                                    <Link to={`/text/${t.text_id}`}>Link</Link>
                                </div>
                            </div>
                        
                ))
            }
        </div>
    )
}
