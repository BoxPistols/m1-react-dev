import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from '../router/Router'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
}

export const Page = () => {
    return (
        <BrowserRouter>
            <div>
                <ul style={listStyle}>
                    <li style={list}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style={list}>
                        <Link to='/basic'>Basic</Link>
                    </li>
                </ul>
                <Router />
            </div>
        </BrowserRouter>
    )
}
