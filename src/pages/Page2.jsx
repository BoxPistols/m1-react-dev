import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { PageSub1 } from './PageSub1'
export const Page2 = () => {
    return (
        <div>
            <h1>Page2</h1>
            <BrowserRouter>
                {/* View HTML */}
                <ul>
                    <li>
                        <Link to='/basic/page2/sub1'>PageSub1</Link>
                    </li>
                    <li>
                        <Link to='/basic/page2/sub1/xxx'>PageSub1 xxx</Link>
                    </li>
                    <li>
                        <Link to='/basic/page2/sub1/000'>PageSub1 000</Link>
                    </li>
                </ul>
                {/* Set  Routing*/}
                <Switch>
                    <Route path='/basic/page2/sub1'>
                        <PageSub1 />
                    </Route>
                    <Route path='/basic/page2/sub1/:id'>
                        <PageSub1 />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
