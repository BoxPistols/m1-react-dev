import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import Styles from './Styles'

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
                        <Link to='/page1'>Page1</Link>
                    </li>
                    <li style={list}>
                        <Link to='/styles'>Styles</Link>
                    </li>
                    <li style={list}>
                        <Link to='/page2'>Page2</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/page1'>
                    <Page1 />
                </Route>
                <Route path='/page2'>
                    <Page2 />
                </Route>
                <Route path='/styles'>
                    <Styles />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
