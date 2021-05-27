import React from 'react'
import { useParams } from 'react-router-dom'

export const PageSub1 = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <p>PageSub1</p>
            <div>
                <p>ID: {id}</p>
            </div>
        </div>
    )
}
