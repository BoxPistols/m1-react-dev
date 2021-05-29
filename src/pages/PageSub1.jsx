import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export const PageSub1 = () => {
    const { id } = useParams()
    //  get Quary
    const { state, search } = useLocation()
    const query = new URLSearchParams(search)

    return (
        <div>
            <p>PageSub1</p>
            <div>
                <p>State: {state}</p>
                <p>Param ID: {id}</p>
                <p>Query Param: {query.get('name')}</p>
            </div>
        </div>
    )
}
