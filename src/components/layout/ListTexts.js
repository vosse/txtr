import React, { useState, useEffect } from 'react'

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
                                    {t.user.name}<span>{'  '}</span> <span className='text-username'>@{t.user.username}</span>
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
        </div>
    )
}
