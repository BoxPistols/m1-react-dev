import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from '../router/Router'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
}

export const Index = () => {
    return (
        <div>
            index
            <BrowserRouter>
                <div>
                    <ul style={listStyle}>
                        <li style={list}>
                            <Link to='/'>Top</Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        </div>
    )
}
