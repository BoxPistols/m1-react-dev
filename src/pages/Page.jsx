import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { Home } from './Home'
import { Basic } from './Basic'

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
            </div>
            {/* Switch */}
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/basic'>
                    <Basic />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
