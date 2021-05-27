import React from 'react'
import { useParams } from 'react-router-dom'

export const Home = () => {
    const { id } = useParams()
    // console.log(id)
    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>ID: {id}</p>
            </div>
        </div>
    )
}
