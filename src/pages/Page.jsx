import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

export const Page = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to='/'>Home</Link> | <Link to='/page1'>Page1</Link> | <Link to='/page2'>Page2</Link>
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
            </Switch>
        </BrowserRouter>
    )
}
