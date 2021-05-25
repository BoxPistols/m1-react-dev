import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
// import { Rendering } from './Rendering'
// import { Page2 } from './Page2'
// import { Styles } from './Styles'
import { BasicRouter } from '../router/BasicRouter'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
}

export const Basic = () => {
    return (
        <BrowserRouter>
            <div>
                <ul style={listStyle}>
                    <li style={list}>
                        <Link to='/basic/rendering'>Rendering</Link>
                    </li>
                    <li style={list}>
                        {' '}
                        <Link to='/basic/styles'>Styles</Link>
                    </li>
                    <li style={list}>
                        <Link to='/basic/page2'>Page2</Link>
                    </li>
                </ul>
            </div>
            {/* Switch */}
            <Switch>
                <Route
                    path='/basic'
                    render={({ match: { url } }) => (
                        <Switch>
                            {BasicRouter.map((r) => (
                                <Route key={r.path} path={`${url}${r.path}`} exact={r.exact}>
                                    {r.children}
                                </Route>
                            ))}
                            {/* <Route exact path={url}>
                                <Rendering />
                            </Route>
                            <Route path={`${url}/styles`}>
                                <Styles />
                            </Route>
                            <Route path={`${url}/page2`}>
                                <Page2 />
                            </Route> */}
                        </Switch>
                    )}
                />
                {/* <Route path='/page2'>
                    <Page2 />
                </Route> */}
                {/* <Route path='/styles'>
                    <Styles />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}
