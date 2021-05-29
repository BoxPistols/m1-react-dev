import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { PageSub1 } from './PageSub1'
export const Page2 = () => {
    const arr = [...Array(100).keys()]
    console.log(arr)
    const hoge = 'StateHoge'
    return (
        <div>
            <h1>Page2</h1>
            <BrowserRouter>
                {/* View HTML */}
                <ul>
                    <li>
                        <Link to={{ pathname: '/basic/page2/sub1', state: arr }}>PageSub1</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: '/basic/page2/xxx', state: hoge }}>PageSub1 xxx</Link>
                    </li>
                    <li>
                        <Link to='/basic/page2/000'>PageSub1 000</Link>
                    </li>
                    <li>
                        <Link to='/basic/page2/user?name=yamada'>PageSub1 Query</Link>
                    </li>
                </ul>
                {/* Set  Routing*/}
                <Switch>
                    <Route path='/basic/page2/sub1'>
                        <PageSub1 />
                    </Route>
                    <Route path='/basic/page2/:id'>
                        <PageSub1 />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
