import React from 'react'
import { useParams } from 'react-router-dom'

export const Home = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Home</h1>
            <p>
                <p>ID: {id}</p>
            </p>
        </div>
    )
}
